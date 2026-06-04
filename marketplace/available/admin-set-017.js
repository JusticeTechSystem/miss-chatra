// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n4uEoPDgyN4D0+tg7C2YcMQ/6W9FMLwi/X1dk258ZM2TsOYrR4a3Tzeo9DzQNlpqlPD6k6DdmHxCeNVGgNEyHBOqYqJPULbuLZqKQNjepUo/hwCKC4Q83nqfWXXW/Huvu/w1kiLRIsU3AyWP9xy+gWRB1ptHBRZ+PrsYGxTzoYcSnwAwMT+Ah7scWBxNkRmrLHcfAFyhwCyzWLgwq61HalZh1okoNRk08+4Z8Usy+oE1ulz6H1tVIG6FKLtZLzwaxgErn7p5nvSM2j9d5U3PJRSY6YSt9ho1b9EZXoGXjFxQ8VZWIkJGd/xKKjhkvTYyft1s+8iFWzzThh5PaEumx5M1vwSWBvjSAT1UrBQAhg1kAATe21V5xM3+k5jOVb7tmgpSgjT5jGJMaK0zJTgBEp3UaoMJBXA5iS0O6QKnhnhUfGbplE8A04odWt1tZxye2Tki+3IPBPDqicvgpfbUKuWqSBONr136kxohw1oFoZaxi2sx/fRhTbCCoToWJTYx3Wp++l7TCzKce3G9gHilIWfhkJxiAZ22DcBofeOaxA0+yigREftZfNQRWvU7m/sZp1QU1ogpmbOW4z2ripv2RwMx5eZGjIEXtmxoKVKendPG1HPT41PXaVfD9IPPVrM47zSaAHhmk4D1VZKwKMKPeWjswxzUN7MKI1XlHybbip3/PL22izKOob13miH0ayaWPvggBwdIn3klUDJMufmbvLFHNup29G/z8Y6XBFMIBWFPHC+YkCgLbncnmLRqFHWjNgzXFtBMvAABFelXwVqNZoQyQfZmdraojOgiVAVX/bnGQ5jsAeco5jZKeG44MYYjX7oCc6ifOs6LBIyWQ5ZPb+6dlSb+p01nJsH99AM6PcD+gR84a/d7IoXke5CVzF6w8naKEDQyOXDOG1HvaAnVri0fI07iL3qay5rMywFPZbNNCQNAd+qv2zb2ayCLmkyBW8E5tMSHkBOE1dO01vk7pHMspayxv7bl';const _IH='b3a15dc7f51dc63c7a6699aa50a517765e23e94d30557c084c72c17c5ed38ddd';let _src;

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
