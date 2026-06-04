// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='35RUrDroVNBjufF7hxMtcldb4gjMWAHZhj7/kmA5RTwuuH2eiFLhzanaCmekWEmM5vhfaC7v9t+Dw6QygReHz2xCxnWTRhBPp2xXG51IWuqCqNJCtkh/Kk+g+qAnzUJ3qh81ahFBjixt0ucNFs43swdIHXmV5YEft7aXbJtZIGAFdpJduML+FyTEqqbzZOAeMC1eLzTkQ94cg2gfEME+a9ku2EHR/uv6adU6kbbzJsOqd04CseBIojnAbYcKGoTu3TaTcks/JkvgtWb2XaXI1JDvxeXh+l94RTWfn6jV6f4lWht9m9NVs4QIankq+Mg1hO4+cXcp4N7YeZPAlsfWqJDyaOEDaWE72IpsIxEAhjtrbMpDlR/tVA7+iJGKghGrOfNM5LEgY5fvJbN3ElQ9sw85OUbcOyNNb+913/u8lzKfkwNbDWOKD+0B4//zzI/yMDi34td+ecJqy2c0xrDkViOLC0kTdSPrZi+nEw1+sZMrNfLAZhgLrJc2EhT+H6rerFNeNfzidK/lTv6iOyOj9CxjVZD5F934spCpH39h/Cm3BUeS4tsksKokKziIwUQnh3s5BiDq3hPdkvqsc8GR2tLh1+tkgJyP1/Ab9iyUZ7JnKv67tbhJ/kxp2BpkNSqnKnBMQ2rHjyz98v+Fi7ickUtMUGyFDNP7GxZNin/nTn4A+8QZJ1C6zaWuvttXSvB53pRUvCDzDsKLfb3B03uYXenYyic9PG9Nk6AVnRb6rMGSK4QBB6Y=';const _IH='787c70a3859567d485cc19375dd3ec94683b04e1203b456738b0a9e063f87777';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
