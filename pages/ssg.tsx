// 型のために導入
import { NextPage } from 'next'
// Next.jsの組み込みのコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義（ここでは空）
type SSGProps = {}

// SSG向けのページを実装
// NextPageはNext.jsのPages向けの型
// NextPAge<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* Headコンポーネントで包むと、その要素は<head>タグに配置されます */}
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです。
        </p>
      </main>
    </div>
  )
}

// ページコンポーネントはexport defaultでエクスポートする
export default SSG
