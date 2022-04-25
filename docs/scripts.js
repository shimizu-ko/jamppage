// 要素を取得
const form = document.getElementById('form')
const url = document.getElementById('url')
const id = document.getElementById('id')
const token = document.getElementById('token')

// エンドポイント
const APIURL = 'https://api.github.com/repos/shimizu-ko/jumppage/issues/4/comments'

window.onload = function(){
  setInterval("reloadIframe()", 1000);
}

function reloadIframe(){
  document.getElementById('rob').contentWindow.location.reload(true);
}

function requetHtml(url,id,token) {
  fetch(APIURL, {
    body: "{ \"body\": "+"\""+ url + "\" }",
    headers: {
      Accept: "application/vnd.github.v3+json",
      Authorization: "Basic "+btoa(id + ":" + token),
      "Content-Type": "application/json;charset=utf-8"
    },
    method: "POST"
  })
}

// submitイベントの登録
form.addEventListener('submit', (e) => {
  // ページリダイレクトをキャンセル
  e.preventDefault()
 
  // 入力文字を取得
  const _url = url.value
  const _id = id.value
  const _token = token.value
  if(_url) {
    // ユーザー情報取得
    requetHtml(_url,_id,_token)
    // 検索窓をクリア
    url.value = ''
  }
})
