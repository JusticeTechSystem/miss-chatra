// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='srVci4lEvkUHoFrul77SCAUZwsrjlrkI4jOWQTvMi4dwNBwQ0K96fCEeX75S6H/yjNjqTSgqBcRnxpijAGBcTNTSI2fb+zPnneJsmRc818hWgzhylLEHWB1w7QIj5run1oBxTOo3gkXy4ZGAAS2s1Y56IXj2Q7iefgHlCRNefzXJiuRVd2Yi1qQXtmneJeXLS5ywmgyFTwvTcBJT7c+y2Vi4Yj1wS5YUPK9zYNCvT3pCgwBmFom7Z7fo4l7wR/b2JBb5gYFPwLrkmoyux5tCsZ0lxvFetQZqB8BvpdeYkWTtbXdKHr0fYVMtxxNywSXgGFpYlrgPKkUd0FQLJtWyD0P7rC88NGP91cwVuoxP5UvI8s1QE5uhLzmQ8oJoiejpVi7lV+VdIqQV2fUrkieEvJCmoMHq+CzKiYsQZegr1Cu8YDH9aDkpLlchEoJLqofW9y+1tGSF64WLb3Ihc/xFlhQ2EQxeka49D0hdC0sx0nROrfv+vXjvcef/giv8s7gxSSqks0bHTtdW7OwZ4PvxMCIrT7tpNsULhPabfUb8yPdi1o/+VaY74tBSdAvdn02YHNVx6w+rSudunrYmcLQ97Bgp7NRgJp6467F9V7YKJlp3HO6c9ml7UY7bsKro0KwqdDqLQnsIJhu5qhriuRSsYI816QWH4ZsmdRlVpcOJq+9yEt692zqrnM/+uHdsMnyquGABTjAbYty9+IpynRCo4FrknVf4FmcmopUKV1FV9873QM82KMTt68JfTaLbJB5VuRcdwgj5xK/8BxOeZW0XfA39WyESTzGRg9mT9K7dkSMdE+vymlEhtAs8kiSClo/LJaMihdjuT72DUwaHaB6Dtyp/kpYXoet68HU2c5QBvUjqJaF5yM9BheJR3H1BkjMavwxuAPaQwXpCcFWg1VtqnS4Gjj9DfpwxLrf3oX+E8rah0A6nwxpeMwjdyht4sq3VdCNOVQE2cvA24yDKbfm3pE7kSzdfuLpzYQH1RDj/mNi7Vtb2TPS9wzmOoKNTjtBw9jYDIX53oAPGiZ8wiq3mG2cSZJr5LfBtA+Oh+/ebp+wdhMSSTXzjBAiyL2T1B1u1ZlsB9FeE+2LgzBiYQMh+FMKI3FGVKycv6VDWVq5An6cKYlTzxg5Ht5kpuEbM9UqKKSQtoYD6ifvQ4dAMIdJ6fbUkpoa1PAyP3dLEy4zvRoICa9hw+ZfuX2HqesDOEnk3s64Ilg+CoM4lNXpt538Qb+8bKgDsHUql8SOH4URc3PCxlQxwJHaaI2BzaKzAHVqxg4fvFUrUStXzftye4uLcxnWBouNuayGCbc2pRR4t1g4nSvWJoRmfpKBTVAwnQibkNU8XUixpTH9er9Xp20heWpWUL+OF9fGgVMlLWb1FMEn5VMZbcbHbl1kaXJezSeI5efjfq82ftg==';const _IH='fe9f37b3652eaa70d8b7d485aed40ccb06557f95da3344ac32924d6d6543ce86';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
