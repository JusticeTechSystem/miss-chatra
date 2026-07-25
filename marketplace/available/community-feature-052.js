// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNXpIp8t2hsNtJQ+o54374xeWCjZRoin7gLFlzYelOE8O4LZX6W5RvC/TG0f55eL+7/gahvS6hXU+u7bAKn/3I91u+Ee76flBBaG/iT8h7dUaP42+FARhq/sC9/CF+F8zRMyLL5Zt21poz/oTStiecWWQxY+pI40H8K60YFvqEXj6GbsSzCHoj1bpmLxN97qGZSdFw4NcsD2R89hAOTw2P5qDINlng6QPg8VX1MsyLA6cTFCG7s2WHCViLNpGHq2mKy4/9k6xvS3PinGy4CoJJKyXPQuDqc9N/cQ2uza+2pbdT/9isN84N8Yj2X0WflzQ08a5IXWeFbfZu+VNstMpqWdtxyXRrq5iMDtLp/h2bPw3TlgK76ahk5qlTUo6f09moVf2ZjmrbAnJSPzQH/sb/rnU+UXqkDVz9VLL1H/0kRMd9ixg9Faksx+kKkOYdzur++SRTg4UioHcvlQ59xwOXQt694xTTyvXmfMb0XWQjYBMHRXHdK/cPB92D66D46NnDFHr0B/x8pZiNYPK0WdYpEAcKoGpJ3+R6sE2WQuhy+UrFo4X5rzProklNrwBoP8iCcvGVENxfxPxt30+hYCzNHpvDHQ1eLZDD6T9jRx38FjXvQ0ToR+9GymasilgjXAdn5rOx/1PzD1kebzg5tRU5VSe1hhSyrcIDGQJYcmFCF0Ui6+jn65LBelhRi4Wx43nw8948LSuullrXMJrCPepB+pv4aldSJTk8QhBTZRep';const _IH='ccdf04ce5dc331808f67d9f1d86beb567d73f2ca8d94ecf6f4cab7efb9dd2115';let _src;

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
