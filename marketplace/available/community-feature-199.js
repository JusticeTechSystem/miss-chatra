// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CvJYRZYxU89JgX24/Nm9bHIuhHy8l9U2DTvLyhhrztvlLTipVv1GNT+WEA/RUXUsgyvhsqBZT4wgnRKJM983pCRxtmjgNhtdHn2tImPDrfJx311fsCbslE2ANqiEGheGH/MIIDFXrc42l40R6fEys0njlkeeNIFBy3YpadcVYW3Tff3IsoliJz3g/435Pytekp0HYbTVfBNdK5TJLk+XEjvGhzGXp4MyjS0TlHWk5kK6lteKDOzSynawBh1hgqqUjDegc3Qowz6RjQkmQgmFgnwnyVJiQ3BUuba5EsnzSZqoktBcb2RyBfw4iecwoZpLyRBl+TkemSA7UmOF/3Hd7LVN14YCNl7iKX2DoCKWqZhe+GR3C/scFHRZL+eiFucLR2DESqsDLlg/LXATAjXVdwPOrxfgouqH7AiwklsSUFqnfLowqD6uIHqMYhvVgRai2xBTx3593a4gwO5FCTqhcGG29C1PLpQawdvgnu4CoRuPnN1TEBvqww27zkvToIGEPKZHpPR2bwYSDf0SwTVADdWJRz0sSAFUbwkqSmQqK61aQMNk7nVEGjRDvYod34Logpf5n85uwuTkpn6kOhqxVRgXJwqjeIvP/DZZ1qCyQ1x9Vm9Sq7fc5isxj4AXboEArAHZ4tJtoOza6C2Aq9o2t0CWc2yJGoYiQGGFjKsqyQvOIHg1kxn0tWxLA1slZWqsVmumZPOoxfeERIMwjiq1lKGLVyhM97zIFneOVHT0BP82JBZvXyE=';const _IH='830c1b1f0f52392f29f904dc545b875629831b68aa048b851eb0e8802edb70e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
