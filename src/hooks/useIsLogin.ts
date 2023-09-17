export async function useIsLogin() {
  const res = await useGetStorage('token')
  if (res === undefined)
    useLink('/pages/login/index')
  console.log('未登录')
}
