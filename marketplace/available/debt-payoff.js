// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SvUOpKZIoC58Fck0zFm6qWmRHViCCnVZJBhhcIketRCW4a70VHaczDPRw+QoD8j+n2ApL6uy74/5vZ6e5XIJQ8fhvwsFRwbDARS46B2DFaSV1zCS5c3+SBVKbWElW4pOu/2HrS382rbt9+LsU8Brw2LAW0uvD97tSL4y16puUlnNg2rMcVWZAoN1DR1ZjWdMkNTylCrvppkNRDvxJXH/XjgcMnVw8iZ3xxgmsp3A+5A4NpN972AkhvfRO+0AIKqXXbGRKQ3UP9KeDp8hsJ8nqA8u2SLRm1NHfiO82ZTq+hvRnbJX+7qBPMpGLccdxF5BrXCftJhuWkI1Hq1xA96cZ1g8AGArqoi/xPoSu78W/fIdD0Pm/lKHvGSacc6RmvNIyozVnWcI6Z3BNs83tqNIrqIUoDOOpGjH2SCrhflyUohw6HbctHQY/SfuHtUpPBaBP4Jm3A0UjvNSchUH3uYWIGm/y2uPBYnRVr+WM2d+y9qC4Hxt8s9d6bB2PdvhHj7cvaybJhkIFewL1SCcP9JJzQm6E6efdgmJOn1XNUyjg9qMkhgy/86t3QJCXydQWbIVS1/ET1Y24yYVgR3Q4i2GPNjDNlCiAqY0KAgvnArW5+c+FAQGzbQV1A1ZvDuiLjPOwlxypd05tejJYjW3EhdsUL3+vsuXG/O4g+ppbl18yasoP/W2Zzb8J8vRfqn94Te4BUCRN5HAjd2tI7ZEUfApPRnmQpRoKOwB5t+9AourTYDKzul2EELbqCwCMaqcd24Dq3GQK2F0Tng0vg2WR4Dk22VegFfXlgpg9TGqRHJ4UTvKIFfq3r2oBQocj0bOutrGr5o+VIZQqh++NnnTqkv/SmUpJd3ML7+quLydbAQ49cLh3Sy07ru9U5o8DpnME8NxiOEupoksvGMB25hkN179PuhA+zlQB9mD+PiubdDc40U8gwCj5B/bf2IxW+/bC9ox3G0NkyWtpkavHxWkIqjKMzsmO+TybuMpkDwUJoI8E3dnfZy0Oww3OIiFX3TotSgNX+leCM1jW+K4bxnfJwYXH80EERTop/7iq7oG89/vICeyp6nrOCyu8okBc6MGgxeacVFvnp48kTSE+E0iYY4XveBL6gBMoBLFMxZ1CndXwZQbb+Ca12+W/krfVhKVsQO4ZCXK1AsG6v0r+6wCb7YTejlq9CM2gl7SFEHy2msOnTz6LRJJAoYm53bkMmLtv37hlnm3IVsDaCDa2fFf4FP8y9/3NZJrlnawBrvFnbvGnb+EBsg4Zxhcy0UDb1HgvRyr1WT0b/cUA8PQ8T7oFUalnLktzxOalwjp/eZSNzJiBbqgC6yHdiMUuKm/Jbb+hkHW1gMxtGWEYaAYuOMOe/HHrfRhLU7/SjJoy2OimRSrvJEJo2oVHINf8Zdx9qTvn7CtERdql9JxE853/8nz/c29qySGZcFr9eSESMfTfzu+LsI+677PPJiOoB00MTgRKOpUqKKVqbud0dyO9T1ZsBFwcopgiHrWzY1/jUj6qdM/Z/gcAPVDAeCzMCW86+hULQft13+ko4n3SBjXMSeimROTwfM+VemVMNfv3kYcXYX9dPT/ALNRVBltHPwmD1LZmeHkUUohuYml8kekJF1/LINBjJEB';const _IH='ab88aaee7766312d6e72ff976635654860713cf89830db65dfe62585261a4085';let _src;

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
