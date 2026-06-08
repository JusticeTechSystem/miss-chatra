// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='whG1I8geCMq4LXGOyo2jGBF6QbnH6GzzqxH4niSY9JqJYpGWdI0DA2kG3NRW9A/B0/1pU18B/OisaG1mnSyntWRzaWU6BDqPC1mtxx4z4naORGoltdre8rgrIBPsagokjMMo7JdPnS+Hjud6tIlOE5XgHaYI2imrJ95xIf8MqXmr+P70PSyO3bmW8djI/KBwTKq2bwswbnLFOBoomz+06owv7/FzKRN1mOAZNjYJ6uJ63wkF20XuTHo9uLNWqk7HvOlnHZAZSzi8ICrVSBGH5eXlKYclDhmw/ZLkqV4BaGIAq04bWGt2ACXRRvc6b5UBUlNPU/gWwKf7JPivNJTB4ENRKXAEM769h3W5x14Vu014hR7ue/+ZR230TkUJ3LO/iiIerZPGu2OCP0CiEJRBK7BFTnXvnzZhMAmZgQq5Mjkz/DuEu2G9QnRtPtC7soHlDS/W/bzIAQbugCl+aqy4DiHfrHp/Z7ppUanPmAgyOsQfcVWU8hjn40qU6NVT3c0gVVksYlTiQI2uqfk8kOMODthGbHRMUzRYFzX9lwYBnGBjyJucZgmGFoeY0q/ih50Gn4WJfs9B9JusgX1GDxk35ywsQC0cI+kyGBum4MMvC89GlgUtKnlomcXtNna9K82gOpqOn4Zq45I9gunhjxTl8ZWSqnCvn+RCUFb7M1XSABhqCQvN8r7jaXseaeRmVyvW/rpl6q8Gq4uHfDj6uwSRU12/ILPaIToT';const _IH='c7f924c4a8c9ee4ff2a97f63eaa5c59eeff31f8eaefcde8e72fe338b168e1897';let _src;

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
