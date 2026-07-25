// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVFBaWTH0eoLieIrXUItnPcOULpfatQ3OStlKqDheuo8RsvE3/QuJnCHTxaNLMOCNQYcQ2PvJSUpw6KEjyTz6YZtBOhfkuip0umbVSlmnq+FeZoFNTU0t7RM7qPCyTs1t6EbkWJ7k81MEY1gTk+ji/DloIVHTZ16pJj8xHgcVNN6lg8fR8XW5HYTekha+0csb5VFwFeF5ewL0X1j3lKx/QA/VWKvi2yeOfe001xbeAKR5OMyG+xKHIy9SWB9bjoj2a1NBotEhEDpZshv/eF8AosZVzUTlvO/HDlbzs95smHsYq1JWPX4A/41rLmHIHc6qYE543wKRHLv3DURFUIq/4DPGKBPw80yhrUeICrBR9Sg4F1MstBhdkgWpNvQ2ghexpLLx3TUHN7TUq0dvgKpf30zMfY9wOwIeYwB0Zx0ycWxzqYaTE/2gHp/TVx6IwaPdu7he95Lt5X1n+KBlX1hgPJjCIBvt/k3X2EZ7Fu7VFw1NNf/wkZvOVZPloVH6uUlz6GTxQy5JOn0nPlYwZVXK2U5DKi/IF+rgSA3i/q5IEiPjA4KrTY7IzWhBKXkkgVs3z+4+C6rzEeOF8Vrsysgx9llIuYi6XaymeSBdrSUZv67/EEtprd7vSilm2tvVqV5nGhy5ACpOqD1pBFP6gO36Uswmk1o+P9xK+0gW984RmQGzFtTNNSHRL+fXTEF9kL5qohIxbseIoRyeoZZqjYcbf/HL71h+YGJjfjOnKuGCMQJPcO/Zm2xQ1nlvr266NpIxnu9M2XgUVz7AZVbdRbtu7gRUsDswt8y7dzVA40f/LFR9jaeOzhxGMPzzQV4SGANudbcuwkiYbSYYp2tHKi8xlvZDKx2snrOWrIw3DWlHhseAFpty9pnSAVYMUQynCDnqInnEGxcI7lcXoZlNawoBemqLi5NzgQSJjPYbhH/vQBd+sDldHbuhE2x/D8SN2i7dLkFN2ogdeDxxkwUbPre52ebORu0XXLoy7SqQtAwU4yYm4xICElOnFwlxSB56d0GZGf+QO68WQFvglhP/ZLmpluQ2mJ1G5SJKqgIWgnJIxOsT1s1vKEwrxsalChCKS+gU025WiBTR8pNdzrVIZgAzt4UlErivNaEkvcyRciQVdQCNkWbqE79gToL0w5qjJglvIpKOLL37SL04ZWE7OT+0uEPXwACk/MKXEZsivit4or00PqMoXoG3BZADZVMDIIkCQDmzbML+nMNijUDHYA4it2Oc5KFjhF9Gt1BrhFJxUN1nx4KNtQst0/P441XRmjJ7iUe39d6+/TGK/I9d2TK/mWXjVK5ncktbHqhhCdgI7gmX2OHJ+5aVM5AgEne7qfIZpyiwbw/QtodcMzNxeyPxcnmB4e/+dKn+cDfbxwCBzK0Chj0gLGHAAiQItNu4=';const _IH='55b173de3fa89dfa585815a27d63fd5bfcea5320056113400c418c33ef0b7b02';let _src;

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
