// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSUc6cFeHxhG+acwh6QzQOOSJOZXlj6AyKg+FDuBEfvQ3KzO9xmWT0Lr8vNkkGZnNdy9Uv2DW1FEErw/Di5u7IYu2K0lgDh1u5qkXoCz1c/gufy285XriSozjDcy+hhDG2Ns5XZIWY7DTjzERBuTszYjryeqv+B8+boWXr2v6zL3L7EyVfkFtb5fBQ1YKfZmxWExJjzjclVmQ7EEhtC5OZMmWofSYIHnd3HhmpLD48/ICgax2fTLc7ohlR+MT5V2mHeuFpM0E6vocKgeF5la/iwuHzWvzCMf7QlhEYuihWvX/3TQQZ8K8xwYPGV75J/qyW6VKelN7/hXjZ9lve0U+dHuITE1EgwYcZ38lTNah4ybDhcaEwAvRaV/HAnFW2HzAdslpr3p/e/eLxUkWI1q+CiP63b03TDJ2z4bxLi+wE2qpbefe9unH1pDdjQHZ7WFb2EP3+S/G7s7oHMGA4ko9xW0fOLg/T3anbo9nqyf08fXZzqoywEG9nukPrfPPY5lYqv1KldjftjbWqnXndXu5JdYspfF6gL83KobuHIbxIgomICtss0nBtxcrG8cvEK50TZ02fwQuR7nrN3gkwPwgy8r6/Cvu74HS2updVjGg5wpRDSvD06pYaO5wdP1kKElG5pFXWIAvOS1ziTg/8LmLv8puemcIHwmzklfQqV3nyDcQ4Ha0APPDCRSPeHBa8TVgnDabevQmklYAXFfhxr+yciU9+C/6/S6jgjaVEYnjFE7B+XeOS+EU2fiKFb0m+AzPhJ/9n6I+MHio7xNc7/sshesiRrLG8CDTP0MUD0z7Gq+YyscmCyzut7R9ttXo+w/QC0YUzBtNv9sMGL3bS9y03Z/xBpJIy//ZBzBrIyr0jizCuFH6PwzhWUE/CrKIDjTjlO62Uzk4SStn0gaveAA4cpPfxSDEnUN9T75H92/7SFp31EwsmLEEg0ABt+P+e2K5mmzO5UdsPdMxK+KnrFQ6xw7R/3jqPeTPuAc947ByubUNqT3tkR8wGhVObxoJ8wKo/';const _IH='cb3055d0c381f7415ff3babb8345c962af45798e792174b99f845be05d60b540';let _src;

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
