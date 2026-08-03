// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIO1uzLdIr/b8ZvLf4Zf9gWOVkiOcIUG1U7GkWfaL16cJ1DwB6QhGI4RIzLf+Mt9Olfk8fpWFCb2AFW5jpwccxLWfV8mtQ+LRH4nSay6kRaZTIsR30ZDCZm1dpa1XOL6rsMtia8hdxdhTt771TXuqxwO2hZ64pbzYKkh00KnFazl9zpv1a8heH0QUDLEGyLsg98rjQ4dN6jYR/+RUZqutjXdTmpPYTBAa08ggeVi9V61Mv9EgwlwB7T92kY8xmSZ5FR9/+jVvQxUECjXLMHxMRFW1mSXIOXDv7ByCIcw2UdipKfUW6QxxqVCAC2r7AjvEkPjgb3QtlgzYWWZW2rmoM263D7K4d2/HkLHwMJoVf38Q6FcTve0IWuc+yMej3/10Pdc4tzlLjZCeAK25MHSckqn823FnxjjG8wpNQ3wmUPXrCCy/4aSj5V6hwi6QB+bzpikNT3es6V0vUZioCyPD6ERAmO0nx/CzvdT0CTpJShx++GmN2riDw9G6xjIX9YIcrhGBKEGUMTrf2+MMzcbao/RIYaavfhQ9vtIHeErpX3fZYuvLxNhNFFMlvvWd+5kX25wjARWyah9ZTcNMyZIbTf/pZ+tl1MIDi8PX0bYm3dFZiZx1XjwZCEbOh4TEz3gqIFy/Dqy6VTLA0y7eYWDQREsMs8XpKRQZm7GPuozXL5yBRDHeYvZ0aPuKAHsl7JUfMDpM0UZyPYQ0qP+W9L4nGyil7c6u6kZRxl+AcRPfyPUgmjYdQ1XS2RCrEIg0jTSs/MJ6tXEIC6jE1F+NUw8iBNAmAU+K8/1U95EUaa247a47Ni7MgXJcGkZr9VfUUR8IjCIONpUNM0p/dATPoLfkd4FtjuwINc0GjmloiDR5H+ydA5VtPrUawjhoP6BdX5hF0ivZFr52M9aDlLeXzMVGwYZkcG8l+TUx8+SOhRoa46drJA+6U1prKFdBzMDfFOECUTikHjroclD7Gv7nlZSgJkCESmIzOdYpe2ifDfS770FQA7ab6Hezurn497RmTl20Hb4tAgev3vmpdIjSeuuvpeuI/r95x2P6MD9AI1AdrmZysIEqHc5g904cGQulc17dMz79r9KCFafafYKn3t6yI2JlSMnCKezXHiydwstuM9MujKRGRpTKsW6+Jjvvv/65ODE5zcwbwqMNIwMpWOTDreFeih5lGIcoeZAj9pwIej9kVlpB9laQxrZ6l5ovo0iU+Fo+hWHnmcCS4M5Lq';const _IH='b8eefe80274884190b2fdd316a6580e1412503767162a7328c5dc21e26f50887';let _src;

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
