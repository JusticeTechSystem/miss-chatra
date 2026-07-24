// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRPstO+9jeTsit94Erl6I+axKwomaBlqJiiIID1SbwkezPuZIkkiwZezigTcfQI/9ZJJ6LKpVZhKcfo6vWk5MgGGDFaizmo1P2VLhSbtaujVr6ucdoIGMQi3kCFiIXz/x4blJwzAXFkIG5wU5tBUU4/idyI30dWu2Lo03BouGryy1ZVETS7MEo2ApBw8b53XIquvbpgFfdZ1v7hFKwZBmoUfm9X5gxzLQHXvFL6+DVl0CgnAMEwrbL5Q0uXwkfkank7SYtW5b90triHzHGLuOc7TK3uZIdeAKGfS5bl77ERZLk//uCUH68GAZaDf9aDtBVPkBrdxzlYHISfcdOk6uUyCV2JMERyL/QHZCHHpumuuSIyYRvpGRFQluTNcO1PaqavY4hqPtB4ZDQZ0jZ0ErFuXnEmJ68vdH/UJm0HN2DWyIiucTwAfJmtPgaCgTNa38B19i0UvVlb5DGZDiTHo+26uxwh0byfg/X4oja2hv9CFo8br0lqqPBZaaEPFfc4uCnd0lIlC4Peo/qruC44EZxpi4zA67nJoQcALomjRU7O3ia5b6Grh5+vECo6+GppDtByMwvbhFk4UnktJgkRnLzbQRCGOmNu4dMnvc/pAsVNrv/Za8vUQfeLcdnNXi2bHeYf0EYPvsplJoD9hGmBWJVGyvkbW+DqYEQfSsSJoDgrgyVfXDullDmtbLZU4gY9b/nW6Ger1j+bm3jI6rxY6AKs+DWmGfFtcIyxCdAXBcbNmw7MLlx6/bFAbXMZEpe8xQjuMTxZVnfcSJ1F8LebaMODU6EBgF6auFJgcSkO4Si8jlxxQHbb76Kn54lEIDcjJDzjwf519DGdLdu0AWIkmnFolRS6MoYRKYb7j/yLlXjlso7wJFf8Iu9AkXkVB/YVFXGnlArJ/x4lCKXOAXSEcgShhSZMqE0cbCnmvqHD/2FI5Gv4QdHS2Jt6V7eMWpFmvZhT7/QYE4zk+jg0/ZakJ29y0TDUKtVyZ/tCubltCMd2L+ZS';const _IH='1d103c57d9abb5afb6515405929cbaacb060772c568181b572e6834b40259440';let _src;

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
