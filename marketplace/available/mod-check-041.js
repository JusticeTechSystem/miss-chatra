// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yraLJ/lRtkMFD/ri9hkGXHyR7KxVlqKd/31FV3eD2ztP+bVlszkajdY6nldLLxylfnHahABH1ZCMuVgv0gJf4F6P8CkPOZcXN0yTybWrwGq87xZ41JqFkjiRd1WBfEEEsuLqST6g+jebS7kNcxI0MRbmQrnp9I+mgb35oeuAprAvimods9VWJpT5Iaznh/FLTe+uf6Ac8zMhiaadH5jaNeIf747lMmRo4QJ5V5l9wKggoolJMcC0XNmOHAE2rH9XvwZGGnlBp1Kg5+Y3vX1FC546lLTn2lmTlOuk48tFjFCBo8JZaqEFS6hwREaePhnvMw9I44N1WLhFH/gUFj1SdUKWJdyxF0urZWJ3VoeMUZxf9i4Dym1H1PGqKkdimH4j9yP5Z4WVUx+v7ymjAqG+PzTfrNzW3ubil+BIhjiXpWwW3zNhZzAZEEN4Xgmh0pWui1XyZ2BGCHL7JgWj6NCsXMml/M2KeWw68Ae4wlzkFym91CsdWmULAZdmvUuXtQ0VqrZS+63IcaHLCu7yYYU5n5SfYmLAuqhZvDdpLPeCgfvi+l+OOeRL2D+n8qLVMuaB5E88MQmj5rIti2uIJYiZ35btexA5msh3GwUJtbYJLhFRir7TeVXj2I/uhmILds4gbMhQuRHMA4MqnBjErMq7Q73nkNwdLAydM39O61znz5PoyKp25Gkb15qnFyMpchLbE7riFGV7k7t0UBhfHfyC5WCRId83uknGAACdfl1rKvbCHBEN6TWzy9NEdZ+osmOes+6twUhDV3mWmF4qr/7hf3szIW8QePpJBCEBKAwZ/5EEhmdkseWw0D23Osywy368znZW2dcps9W3YJP1aQPXb4XYvDOO1GVEDaMHQizW7SKbb2VzvNoU2ILGHIbKS1AlFotr3v9fS+1hsXgD8vJ5cVu207lN8VoVwdCMcyCq+SfwfJ5JHSgWobxIgC2JHWb5ZOE4+6w9Fu5hQce5V0DwNF+/KtLI3XF9ZFWrvRhPMtj4IhX/CzxUuCr15+ppk96Llh9t/FPXOmFMmLlRj/uIa0CJDVBTGhKSnw6aT8NesG2Ibz/NPewm/JUJxRvoLMVAOxEQg1pEsjd5ItJa7q4njxKGjIrp0W8dj8bFq+rPs2XoWoBIb9IIHV0eBhs3y/PbN2n2/YRZM6mwqWsZFkWo0NHk1TMGLQSYNSfVrzDW8WsLVojNR2T+/ZQ27AMSUegJAtRUl/zfu9PPi5ZO5hodrHmX1APb4Bb0ZLOuRZfnxYtaSQuyteXASIqjKDtFavhYva1dO7lLth0AL7/CL+oNppVC6LwNiRuGASn+VbUxaeiFd6pGCfXHHkqKp3nmslhS5Jto/JLYqVDXKmeTwsBZNkZ9wMLnT3qUbA==';const _IH='65db891806d86fc86090570138f5ded8efa90f51ddeda49fcf8ecd7c18d6c66c';let _src;

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
