// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V4lcIvdX2U1K6kfZSue8/B721/BB0SaH+iwrk9tT7N8prKkiDL9dS8mzE1b/Afug1Z5KjxMn9YQ06lJijpfsVSdkwPZrtCUo3rtbRQcFMBODGLFH3OS8rqHcW4zUfWbUbABI+uJd327Zon+7DUtjY2QQZ2hG9tUhBOsoCAXduh3knIfHxHAxUo0b5kcR/l8D4z2o4TyR+00LatNACq2+aKov7WzzHSFTqRswkffBq14+GV3QNZdZRIehZgFwiIKOo/djpjmymhbVUN3pMUdqoEeTFgCbRPQT4A3ZpOhngmFc26+TSY2UaUAvu8+eGqMuu/8jYpZhLRcVR+phopcvCfLGipy9pALhZ4vYXh30XaYTXszyYAO+NY/mpVD4XlyxE/6iWaOP+Z59Jw4NUk0ZqLmzDMIKUsLa5ghLhywPtW6rcB+bxqQpPCLDXvC+XxETZaZ7L9KMghi6/zZrZeN//HNisn6u2j+cefQE++j1wfZCvjJ2+7uFmKX741djCDGFl4izrMl9Mkcdk3d6FOuXWGbOKArEj7Nz3QarJSW7VohKRAr/1us17KqCjPETPZMji6cK72cRWcY7uyP4QWoIcztCLFRZ0noi4/4sBzqPc1GW5rRRaaM8xV5sOnd4sPKbTY7ISZBXkhmkJlPzlzG1wPqZX381jXWUCG8s+vPa2jovh0SdwhOlSbXeQasrn2FarDX4vK0oLi5FQr36HhM2DIpW2W7k/nBPRU/Ol7+mOe2NqidjInm7Nqd//+Fey0yqTjNlk9AXSOtZ7jHPXrFeOnnqbSTJOpw/X1z1DcFJJK4XWWF7Za0wB9BTfMpLMIfNFNnP5a8n0whYWxgjRPVmD6jcFxsnogMs6QslaH+KQ96WGRIzpv+T1Ko2pmivfvatF9rHRE90Pmc/3ZUJeTQN+IKKKtncKVbi/m0TYxPWQdOFFSeTvCuBqPUiBHiJaYyuN61Etbmf3hZLWf1QrmWnz4HHOgxsvetEhkhZybGl9DPCkWjjx1ppcFDZVAHiGkB93FemtbetdxtN5pxEuyrd8/rfpRRqPMQfhUJVe98CtCRy/rfR78G0C47sbjblVgZnqGNCdToOKegpcbfWRC7ujBogKrmUQrnsnxPX5T2tvjQEzlpcj9SOvkhI/04kYZtPnej91u+fK1UPfHOoBXy6fmnotKDGEwvodK0yBWu/DdrKLolfjH38eeQt4WhQ7IJBbZSh6kF5RzzI6Gji';const _IH='92cf2daf8071295ff42eeea355a4b8bfe4918d2fd3bab92cdb87b91b21ba5468';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
