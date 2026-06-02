// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6U/EAGInnw/V4DH4OLes9p8TprgaoqXXoK9AG3KN5UO7iMCA0/8LvcDX++30JnssH0o8qs6PGTClrwe2lNGsoXr+Rma5AC1oyr3tRvkccy9AHReKS6BS+VrKM7V4YulGYquatAnOqE4+UfJfWF0rnd7R+DgH1BDV96eImxARn6A5U8LQS7Jffa07viIvyXSDzZf8EcVabFikbiCni4g+z0fNj1Yib92NbE5PYSABzJd0OrXINroyRqa0qApt/+D4KaawXTBlfpXuyEX5ccgqO194fadUWYYTY5Vv3GaNy91b4etvU8x98/QpfoQZyOMnTomHfhecgmGhGocZPef5dKw7tU1xkjh9qFaR1AwStQXrycEq3BAQ+ByPYhNLyEi+wU+X56lFf+NaeZMVHgD1//kD6UH2G6Rm/jPHD3pu6HyN/GCqsqf0zGNGB+hq0iXjHo0J8ZsrcAES2HP4joklgfltF0Cs/We8HeuzTvHMz2RH9br8NgptWaEZuAYEft7yRpQAllh/oCOH9wtJIoPCkFFVK2UxFSSYENdZ7U9sP0JAfhEcEuZ60x0ZNlPwbvw9JAWOb3zy+WNwlTAri2D/aFyKKDQIVeZbGew6yQoiP8hhOPWiEGOru4/6PkuGyOEsx6WuVc+St2a5aQW+2GoXLw8Cu1CINlT+S1MvBQKeKtH1eTB7RqpQnxaiIrFkBr7hGrAFKanWOlKzLP8jVbNyl7j4iEbHvfhItRHGZCE5O1mLsCXmGODYekgJtfZUHX7+ruKJ0GXqHB6JHtORj/bDCFfDXIHLfoCv+22qBDouHKm/jo4DfQVq03N7Zs4mfHecPz3xMRW52ErzVXja6lBmOs9zVhDhr6QjujhmvBSa7vDFSvmowMhd6nRkrFHDIJd8tORXAbq/LUW9hB0qHwqV+caj+u2haFe00KKuOxP55l79OsF/cW1LwHb4Qsk=';const _IH='f8ea83113759ff15425084370cb3d74efe2fb90ada4655f79f821c7cd5ec3495';let _src;

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
