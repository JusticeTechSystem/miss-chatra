// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGEnlvwY3mdP01sdBUqUmaDFN4fe45PUUrYLH/ikv8jmTpearmbafzpf7Os0ttp6fS4UaOpEqgRfTNgRQrVGcBFWGcKTs6hmfbzCFoypvt6KskqCyOCYyxxcFN4BH6yFs+7fRifTYIUH7Wgvhs+C0eDyhRPonR9aM5Cfj/6AXD//CLYQ3tXJQGgyz3ER3+A0EzavGvadnDYVOhWvAeulcIzCKDi0TYvBnpsL7g3XdFJ961/68OXtalppQmf3qfEPb4xW+dXw4NIgFoVh46CGwAc8ZWuSwN4YFb667K/m/DpWYn7jwGvH6yZM7IvB9hOTm9CwFrg7vQvc22yVv+MbUbkYU6tMHIW0SRcmgNeWJ3wjYDRFFUkkvO/KLf9XLO7OB9/p3naesAT+VbeULF/L1mmBKJsRS4VQHBWgGJpKx1Y4dAQhGM52UJZGKTny0EVuZ9KbKQYCwMqg4fBPNAGsSBVYf51XS6dnXiFtnp7w16GEuRyJoXAp3u+f4BvCSaJBNsq1fWqpo9Ss8C4x6XQgVJh7GVMx4FANBHtSpYPxAvmAnfNMaZo9AmrBsl7ZdC8N1e2Ma6A0+B3PdTm4QZaNeocxxwdcV5btHpm49/O46pBsWzymuq0I7TPfPBOMLiysQQCNZAyfuQ6aTVTLZU5eDETaz968g8nYKwgb3T+FQGvZo1ms55jTb6g/SjZT1XdSwfROXaHNXLmRNviOjX+kCHSoHPkGQIr/yQ2YiKEVyp0Qy3/zonhKd1En/DTY+KjZJ5e3PAD+ZxRXhbM7QfpwQVD32rCGnRItOdLVkM10czu0rYemdDWXbRoz3UguJYEfZgb0i03W8ewo2pz1kHUPlGBoogdFoYDFBiCFVefEhkSePytw94urxzKC8QcocmGiPEhCR5ff9keWmItmO1g0EGHrhuzvBboVl5wjsq523/LZkNXlMy/karu0CGVAPz9k5JjXSNiIL5J3FM62Bk9No1lJryAket86ECYKl2UKmK5WPHZ2LFNXjQ0QwIRKIkUQEaRekPCduo/bTId+04QAJlTEMiemiafnoEm3NSFVofPTcZWdXZFQhaJG3VL6SK2bGTuMVpYCF8v45VxcSkMf+6MjsbL7hFUB/0VBv1mhZXHGqnMl264sU57ywYxfNNWGaI/cwDqyI9lnC2KqaYWEZ/sqR3TrqvxBQrIne68N3YTsAJFgUZSIv7nuK66KH2F/N5sUmnI66QvYyIawkr0LMWPt8lNMUq+6vb9Dc+XamEZF/TjNiB21bHv9SypTDjreAer6yNoV51b3PxtmTJbxOqHgD8vRc0TAUHs6J/G2rITR6atfJSz3ZNoeAE4s5q1iqAlD8InQGLemfHGqyWfIBPxwCv03XmwCX6hfNaQ42HbUxue54xdSXjIJ1lYLHw9loeDNn5k8N1P2ZWD00=';const _IH='2f49e53059f05aa3ba86b66b855e2c0aef93d899b506bd11e0fb51750e6095e4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
