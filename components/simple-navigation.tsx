import Link from "next/link"

export function SimpleNavigation() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-blue-600 dark:text-purple-400 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 dark:bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          ReflectAI
        </Link>

        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/case-studies"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/troubleshooting/faq"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/troubleshooting/support"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/troubleshooting/common-issues"
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                >
                  Common Issues
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
