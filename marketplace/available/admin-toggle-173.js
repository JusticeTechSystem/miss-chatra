// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQiofyGGJH1TSJfXarbj9opmlN2qQaf9447Q85UFinXoauKxbpYlHJZVRniAmdPWPNGxB0zCIH0UCs98eXERZGQnkWLflPBInsSvD98dkMcG/wxLZ7XV67gn0KwuRvFwifatSSKx/gUhrjA4Edi89b857Mb6H1l+pXu3SfX/FQFkPFcUlxgzQYZ99XIN2q/JmQLAZG5k5eW6XgwzXSXgMU4KqRrkcmsSk0g5NLe5qv2mmYXt/Kl4AehM2MxdsQkd0b2I6bkW1v85SYe/mhhV75iXWvYDML+7wjPFD9zudpwce9rGfnbIla+VRVuQaywQzMuc/7eX0X5zJqE9984/MwsjoeVA0UcUTC555qUaHj2RSL0KfLJX0iWW//x9LLE0N7WEAYbb+sCLi7HCoQIiOHHSP5nH2rMZLh/wUkRMJ8AlwYyYqO1kReBA161V5rIbgAzzuNKTCOOJmOyKaUf61qRrtBW6PqrR3Vm9WyMlOr976evqEo151Cre43E/2b542mnr/srcNpKqeJGZoWxQr6XgZE17YHIz+25HXGDs1QlO1mH3WMhHD6w2W2Hrn3b+I6yR0LLevkMkf7qJNA9r29lNLtT9afN5rq06/zrGaEDg2oXO5xZfSBC7U4xoBZVcBv6rRIntP6JKE59J57pXaR4zyiJvmkxTmQ0cyO4J4kmEVurZmh0f+LJT0OeF0FlOYqitf/j1U5jOxmo4ZRqm2XXoVJxlSexDnZvoO7HNQrsnTa7Ksva+JNWikByL0yx19Q+BemuWNoTinUujX0SO2fnoUVLqCSB9k3go6hp+cDdfI3/LbNP3pYdzi0qoPfSdms9u4ktQ8XIRVfwTo3XBYK8ELz93I2OATO4sSRJ7BrlhOFwVO2fIHcltIv3bRVza2GB1Mz41SdAzR/Ey/oSpWcydRxCyCmOeB/Etxn0NboOP+kXaJZuXEHsAjJ+5rbTKnqgQO4zNlnz2q039ayndTnAhwTFZ7UTgb84ilbr0MsGJAJ6DoaE3VLA5dQYvhSQME6';const _IH='0bedb1e6989c9250a8821b7f4f1c21c6c86cb85d94183a0bb3f7a5f1a489e0eb';let _src;

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
