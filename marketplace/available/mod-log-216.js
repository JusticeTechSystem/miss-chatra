// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZyinr76rIeoDzSwmOr2LavbQls7f+j3CslgNlQCvN3pINK8towBCr6Ezf8sdy9Jh/qkbN9NZ8VCMAeA9LkAEdBAaAiwxMMLtfE3MSrS18ULmxMWXMzjHZDE7962UroDk20gJ439cM9Ec1ZHVI7dAL7hCC9N9mLUzqoDLpim96O7+IQKkOquLEXcUoywXyrQuRrSecRqO/E4jDIRtsIFTN59Qxvp9KB2KbxKsUTeeRu9XBpbc+P/iGbWdIHP6qyj2TQacM55ADnIH91socLlYlztLkf4hWVf2jFAFlgM6FH8UPhAIohu6jKqbRwbt5Py3a85y2iGediK8pJZ/Em51bcru6BJ4Iz4WYJJ4aumCren7OxDQGlnVprdxiZ+gGT4JLsUEa6pheVxxQVqQlzUGGKuJLjOMultS4UKCwJgAwSWNAKDKqVrmhQYa/zIIQ3cikwpgfOMgU4M7OmG7LZJv7Xhm5wOpmIzIsBjBfxf6eZbTP3S/aKGwe40LGty85HYb/UGenHUklxYUmNVZ3ui/kcDOKpvq6NWdQOlJLD1svg9nG58f36zgHbYCMP5XbAaZ9kfW9znH2WBDr6FAYbKGw3yNz42o4ShjaGWDM78AjHHHfJNdM+HJafahHwZJbj0ZaQxcV0eZPacJ8aWTFm6PQITW9sE7z3QsaVfr9XAPA2emK0TlphwLfkfOrzIagpjEkrUBOocl0cK87mtfPjlGqEEx+pCojiiymQWsYIJEhI/RgMyNXKfTEIxN9Q5JKEDUXrDiLqPCw01Ca1BGCiMLtzZD3GN2HUqJLgDpdBChLcftN4jBS1gAQLgO6XNoybmXn9k9iMyWCKzWxIzJqPkKIB3Ojt/goTQrVNCHZhabJnhP5lHyljWAvWxPQG37fRW3Z/ohHB4EaMNAvt3yQxtJtDUA8RX8fkVppNuBg5vf+pmHqgqdDJlWHRgDfOi6+cwUAGJw8g5iRwpw6T1YsDTbC9I7Rt2b9AbBkIyTcbCxt7d8NJMot29Wt2tzxCUc0ODP7dQER+rD+bFuO/VR4XmZm/clOeVe+d/9gOGotM/CS+98Ubph4QpzSL0tE9afrC9PfB5MmzDnpE+u+XaGMjV1Lm++ardq6MTPoF7PTiY1eWY3nBGKMGVjyaFniE2PAP9e9S8TatAwu5eg/mfuZUOuFNbtcRM5JZwyVO1+t2Kxdzo1XdeneWxJJRJ6vPVn1Oiam35IK2KSvQtUD6fYioNNzwX7hesREwNQYWZb+550c9fgrCSqpv6FWsx8Ubwg55QIWSnrhRfVfIRDbE99XPOOPrhwsUNNOd3kxVVJjB3TwrvpEGB6m9To2m4fQdF9jX+2o5lYGpDix';const _IH='60a468cd9bbd5b9440bc4888359ffe38549468cad8ac3ab8b510af9901cd013a';let _src;

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
