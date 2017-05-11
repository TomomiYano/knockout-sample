# 環境手順
## 1. projectの初期設定を行う
```
$npm init
```
対話型で色々聞かれるが、基本EnterでOK。このコマンドで`package.json`が生成され、そこで設定変更ができます。

## 2. shrinkwrapの導入
```
$npm shrinkwrap
```
`npm-shrinkwrap.json`が生成され、package.jsonにインストールしたモジュールの依存関係にあるモジュールのバージョンが固定できます。

## 3. 必要なパッケージをインストールする
```
$npm install -D -E hoge
```
バージョンを固定してパッケージをインストールします。
- -D [--save-dev]：devDependencies
- -S [--save]：dependencies
- -E [--save-exact]：保存されたモジュールの依存関係にあるモジュールのバージョンを固定してます。

