// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwRZCFYcvwAEgIoKVNvTDfVlqntsVmOHQr7Xb94YsAxGZmeClhsfQbcmw4eSfccXPf0rUTmZ8f9lDowN/4q056F0HQorBRlLvDmknpaDPX9MZa1B7mBs9Rnw/qwdbFZ6Ossf+pIViV9AFPsDQVV+W94G4Y/5Yh+WMJO5QNbAzvc8IUk3xqX7rNfOSgcdBswogy7E8zwr+K2pNezb/7XR0C2zNWt7mGusUtxmy4p/Ak525i1CX8ualKvfA9qD/9XxwuHD2N/WdWVtOXrVmnWNU3B1SfgxJ/HkVEHI1JbykpkdlT4Y9TMEsxbX9EhhB7Q6FtQhTTVmzuoYTMIVsTdy2wRHYtrhgyP4u1gZIkjbECZjF1wshzdyny3aHCV+tJsIaEvyg++S57tocbj7pl3nexYUYTzSr5b6zMNFc6lwJuIdf61NEiEMzcg/OR4DzVeH5rZVRulMdQ+kx1fwStWhknCMKqrw37AStbhJAYD9jvracHdfufJswqUMAY5l5j4MXEl4znrynWZ6AqKPhyGvKVLwiNWMQ0c7UU+0vMNFb6kfU1y/WKha8SwHW2+H3iGbE8etZ+XIjtuooMGdJ5GrNGX0KWmqo2s7N3++6VWRvsd5ppdfS+i/SWSQFCYAQXpbqPyKYOpbIihngb2UlbN5ncsTDI9mtqttw6H5QslDnA47YEUDhIu0sCVB9gYFrDEPIr7t1+40MDEocXSvxkp6TPfimtveHGFj4D04PM9R+HMBONuwLZwhD5h7yVdk1ujNevZ5hbjbsgoRIzfwx05j53Y7CRJX1MZuLKZdBJhSxALm6hciC7Dm1zuiMYWZLYs4J7qTJ+4T5Oxd+lrCDJhh/wXxIiXSWvm09kS7/3DLyAKLurdYsVBDpLmynHc7CXDVpLTXSvVgyF0hBGmihiwwoxXWTOF2w7VMpWfv2IAoev0VoNOU3NuOfCaaP4rctSIXLUFZh+l2L/yujQjGIorJqa5aTZZi2qOOgiyutc+bms4pkjSIr7me2HR4bF5nBm9qM8IoYFd5JjCu+38M7zz90FI3nLYUAFq6qa3J4x67j2pF+zvwbZf0Y2OLoEF4TqRFO/Pp4dehNvdcDXHRNjKhvrC+12csFFZzj2mauhG4L8a+1SGoddOZl6viOa55ZTRoV35+wBoQx8dRbdoXbkplgNEWMtTMvZ5w1Em/RvAVD5QmVTEj9vil+HJ+tvfdZhv911oGfx8+RVO5QBqymSceJIMSYaV1sz28j6316UT+Xy7WSfsUXjALrSIZKUProGz2B2bIEQyuxQY5mXAcpAIolNMuVt/PuFXeqc0Dg/cRo4uFyo+0h3jRzcPiUjy7p0bSdxotEERe9sz2H5xAVz/erbI=';const _IH='c293de4175b5dfdcf213bbd457ecfb33ea3fbfa046b1733b2497a27274356f67';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
