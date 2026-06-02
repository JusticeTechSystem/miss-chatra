// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3kK34BrAUy9RU5m+5jM9P24zqLrFd1iaXrXRS+m/N08sXLMM8E7UMX2IAcQ6x6gkeVRL7P4iy2zeFXR1P+UNFemG/IPsP3bmwonZ4a/FaD0FMqCQnjBZeyhNzvz6SfHSGZCAdGeiZ7Zm58yZ/SIOiKvXY9iQPDgcDi34eSPJLbJMVxxsIbkAIifPI8dLCzuvrGgnfLVL5UqIS4ah5FCfWGZNzybUMpWn4d4o36Sxv2owVw6dVesHdRgsKIHna/N1dqX2XRpbdBFpyDzTRzdqLPAfLXQdLKOO6R8J4d8II20o3nOyfLIvJ9Moke1EM6MvyZeMibv3m5bLjAKW/vt3fvHMvoFK/6umS5dbE/POOObNl/nno26tbW0H/axpIdi/bN4WuXwOy5sY3N/qyHK9OlO0JGo9Uk/fUKZeHPrcZ/65UuxeokpU02bcnhsDo0qlYjXfN8ai2C+mzGApLqbyL1KV7fv6amJQkQ03icyeGiXOS/DjeBvz6iN1MMm286MyNzL3IoIAAr+Ne3C6gbBodq1L+mS+Ba42R26kX+jWrogoK8xl48v17Bfpd5IEMPxw53D17VOLaBo8Hbeh6YCxT1Z7LVxdRJ1v/hj8/t5LeRTh0vCa22fISL+R1d3D74XztH+P0lcfwAPORUmsx9qfPRax+niHso2159mxNYEQEN5kqqNei7c3UycAE/LlPCLXBNAoed8uTtnszMdsWJi/sZvrgbOSG4VppL1EbNJTsRz0CEUnw7lN00++';const _IH='fd5aa4c4399d811e0b5879bc361bc57848fc8e3c23a74ab2d59690abc57b97ff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
