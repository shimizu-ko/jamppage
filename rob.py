import os
from argparse import ArgumentParser
import cchardet
import requests

def get_option():
    argparser = ArgumentParser()
    argparser.add_argument('-u', '--url', help='url')
    return argparser.parse_args()

def get_encode(byte_array):
    guessed_encoding= cchardet.detect(byte_array)
    return guessed_encoding['encoding']

if __name__ == '__main__':
    args = get_option()
    if not os.path.exists('docs'):
        os.makedirs('docs')
    with open('docs/rob.html' ,'w',encoding='utf-8') as file:
        r=requests.get(args.url)
        encode = get_encode(r.content)
        file.write(r.content.decode(encode))
