// submitイベントの登録
form.addEventListener('submit', (e) => {
  // ページリダイレクトをキャンセル
  e.preventDefault()
 
  // 入力文字を取得
  const _url = url.value
 
  if(_url) {
    // html取得
    //getUser(user)
    // 検索窓をクリア
    output.value = _url
  }
})
