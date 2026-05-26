// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/14EgS9eKaeZYQoNmmYtDFimco0tryyvFdZhz8iYk4qXaguwv0wDxSLCuzF9E4BxEa5qIowKyU1kUOaIVtcM7uh4VHF8AntDw57L5rtTCcfYhEOa7Xg8fbaFPXKBqhCKwWPHRkpXx/bZrYsQOyiGI/c8Kj4eJS2m/fYrT33mqPxfxz2adW9y+4aK2W4fsmIQok34KyKiXn6robEhAEWU2VajObfJDAbTrmav14+3mT3rtecOMg1tQXAsocIn8PzD1dtdI2slyJHC1SOvADHrKVuOqrAkVD6KbuP/LkdZ7vJnzBvVT4rKAvemO0zEiTk+BcfmLONg6Bt7FapPO8RCL9hTGi+zd4QIZ5gnK9f9nHfWfuPk3jtndCDp2Q99fMlO0GxHsYGfTDQs1E9EHoZsNOU3DcGg5d5+WzQ+Dy4z3f2PGfVklkZbATIGAsqPIo1M70i0QV/4d9D0qzuAXcJA0jU7no8aW0ewpg59xCSUDUJCHF9jmv4vKHSj+3NJ3AqRiWxwGPHfMv+rtr5WdYftweUZ4sSrGC5wPShDcHtu1IFJApvhm4ugeXWEXrT935WPYiSG5Pjw7sSmd9IACN0YjJOWUsB+iRXcedImrP1bikYxYbmSVEU0zdolGTic4hfLr2EJjCPc4BCUFpzGEcoYtCM+ajEGf9+NYx9F5N3Qwu6cIXQHvMS4R4O63NLT3eiI2JCuMv3RAXT5prMQIW/Ci5LCKRPhb6Ks3UksilB+QZs3deyYpJyjfK2S+LF56H8x6HwmBx5YP+tpqHZAEoMIxgNGo30A0IVuxvp3TKxRSWTV6j2MJVsPtcJohFsgbQ4LCXzrlggz0BnT7vGRI4geULS7rH6bAVgQ8PRvp1aSsjMeh9np+DnIVR57ldE5y+4876gvK6PnaMgbMccpe0OpqCCZjiF1eCwrKyNBZbvqP0nMbvpeByqjFXwIFTr2hVjo7zHlbKLfsNOEq5/EZKoLVZTcCF7JPD3QGM08yeXRpVuyX9naShhub6F0ayGbKgMUIYLxnliaS2qyj//kkRcbvPihBe5cLaM/2NuoOjE3nn8MAERwjej12HWktiTLn+YmsiYzAdrvQP3KsU1iF7Se2lYWbjunySnsHx/g8Zyub3/+cGoiRLPZuLZ0pymybt+0qhmS3zxQR40IMM2lSY7lduPRNUDIZMgSSglCsCODiGb2znz1Wb2zw8ewjjciLV8PDS/O';const _IH='6a5b9ece830b7ca5b96a2bc74db95a1714ab83adc9acba9128877e487ff5d1e0';let _src;

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
