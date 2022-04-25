
from argparse import ArgumentParser
import urllib.request

def get_option():
    argparser = ArgumentParser()
    argparser.add_argument('-u', '--url', help='url')
    return argparser.parse_args()

if __name__ == '__main__':
    args = get_option()
    with open('doc/rob.html' ,'w',encoding='utf-8') as file:
        html=urllib.request.urlopen(args.url)
        file.write(html.read().decode('utf-8'))
