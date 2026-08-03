// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPRFrmfNrlxOVzHh5quCIBSKmUgA9I3YBlGcfDb/l2XkeJjv6XhkJvGXiL2ln+xB/FMESizqkrvxrVdzTKILJCBxCvds4QefCdrIgWQGWSNSu6jERIsncWjhxDmWBGSYSqGP413KFX+lD+S/WhbVr8usdL2ELNZQVUyacJKqmZDijF5brkZiPLkbPTu1o5SCXElsibpG24oGbRFa0iUX9T2TIFm8ZrTJH5hQ35HuWwCaZTVmfZScCSl4TpDwphbrpjtpcYq7WVCeGbDNZz9FSzE5S5JV+CYt+IqpmsRUGcZJvXhVysLJvThF4JtdDTyGnm1S6WspHAnfhvh62UIMh1uLPPjNLNVXXQbpogG8GkzXxWwCu7zp/UVFFqfP3Zf/72js7EgXqfwiLNkjYNFrh3nE8d5hAFDRC+lwxd2kmW+1sN4P8C7IS3obmS1xrQ2gX0wv+4iQfC77z9D8Cw9Jd2JCj0CT/Qhtf2ejTUk/cq7KUbxmVWs2FsOy+m6oBes8vX24dPoLZ5C8e8+3eVbC7R5ZWVU2Co5gHbAATJY+dzYhjdz3TNsMZK+u/YhMgBlmtbvlMc/D4CmTSzNvvFNFAlOLjqBdRjlxUkUk/MCXUNQtGl6I+YgLyOgl5SStDC96rRsQqmPhsJ6Ezk82i/t2fjo4UaFXmLSirG1D9hxE6KgLj658VQbxktnSaxhMbz/WorNzOb+pVuEGjS15NZozmTDxeQ0Uu02QIaR2DrtlTe2/3VdKHjGOiLYLZ9M49bct3KIScEGlDQha4el01Cu3F9jcK47tnmwT6Tx/+icr2eSAhTC514uCpmm7DEU65v9W6EnuSzMx45vT1kKjvRjv72rGwVcBUvcXcywYt2/gU9okCTcCXuLl3I4Ew2IuN9keE7qOSKmtRgWt0nDVrFC5Rt3piR/WwyGFswABModMG6bB1QUcBKmg6aaWBD0ih7YmPqLWAmEOyjmc+mAdKsUAknopCrJkqOjF9j5L79bPeVLlwFaLszT9VbhuIkNwhGBCpVz6UacWhf7Svdwbof72Em4udZKJ8rVKkr2WAsl6JeIjwrKz4Z8wKnPplNlsRbfQ5BLO1Khy77kVQiiD364uvl1EOEBB+1ZfDKOnnvgWM7LCTJC1afRiaz/78R7W2ZpgXCqZfF4ZTEqAc7sdWvzxKymZHd8HTKKtn0Az300vIAvf9GiFDMaLqmecp1Ip+vTZOBnAb+n1QZ2C5WqymimMeM8rjVFp3NCGt7l2m6RXTe7c4xI7F2XAC44JPJWgjWad0k/UB7XFzWhwmf0dMyUG2lPZp95iLLq1e5n97hmg8CqpZ2QrZDnK5MhCwO/3/MyyY9AP/M4Ev26rJTdbqw5YADqX5EIraanywkRr4=';const _IH='1eff3d4ea4fe9f5f6e67967a6da3d5b04b3a24ec462994fcfc5040c0ada336e7';let _src;

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
