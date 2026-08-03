// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRUkWUcFx4HB2klV6hjIFnbPvN0aEjz3YW6sAVUNwL5JldOyDborCLWIQqj05ZJm5nbjJbcQVb/p7Q/MXNtmuka7H7dkhXvZxo397jE29L60Q+IZovqM/hh6KctahZjYpUyNt+JG0k4ztBfxDO7vsPftMcE5uuQvaIdsQ03PAEgUHVoNnJo4IBeYETv23PrUxe33rmX5vOT5fjrRaN7DhD0vyoFBOgdcnwKhs4rI8ysM8QHVATJh+A0iFmcbXEyPISo5xq+wo1Bq/TS1SorsXkGiczfrG8DJlUC7aGiRl23o9/66Y8Xfo22XYaHOK9mCGXt+v1RcMpdov1BpmTqxJG383ntR9HlygDgBKD22qyw+tBFPMBIeK8OA/e6dn7ELovuTBWlFTo997jijF4/ZS3BpLHR1DEWMCUS8ZQPh7+vmsstT7LDBnXnu0munKyP2b1r5coKKsZzzQ/jhj7OrHCQneLfoNHtEenM3otJkb/Zq0GmPpd3NcRYPI9r6GrZPPQrK6I30cG1Isyd7eHZ6tydCqD9mqfWorVMT0/ug46ClrjNWYuVqjDKCkZiO4VSeWs9MfBRp1AOvoTmw/zh4MGPssXESX+yPv0Wr4Kxc+qWBrgEPckKKcICNptA0QGvF1d7eseGU/1+mriMw0QU+aWThV1HGHsyg3QXh7w8GbyP9hcmBsDnAvcWWSH3FMYPMz2ibeyDhntUE79BmFHybVbZXD9ulv1O+zaDCM0W4zw=';const _IH='c915f50091ca441a5117d303ae19fa14ec61ddb3ecf06d68cbf94c80d7a285c8';let _src;

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
