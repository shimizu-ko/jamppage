// submitイベントの登録
form.addEventListener('submit', (e) => {
  // ページリダイレクトをキャンセル
  e.preventDefault()
 
  // 入力文字を取得
  const user = search.value
 
  if(user) {
    // ユーザー情報取得
    getUser(user)
    // 検索窓をクリア
    search.value = ''
  }
})
