// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ96NSNUPa1fl6mouZt8pKrn2TBT/U2c7kLsQ5I/FIS2eM1BNi07DD0g447BE/I0em49IcIMcQVarSX7a/ddeRNeu8upw+tMJts02eW9HaZhfsv1Lwc+QxinkAMHyKQj9i9EJXpyGO9FThOOI5motfIGWDefxzMgHZ9CT3ZRwXsMsh/GiIx3qabJWERLelqx+oR18oOMSAQkkS7PnjxMPylPzdzcVUnf/5l4jz3KLr1bpqhBBQUb63eprqIAX3ciOvOl49gd3OomTSRQwaKaNglUee1kEeZUlG59nYFGAHwFBwyOR1CEtxmY04wdcBAECperN0MukANWNlnmeU+66WjwhZFJrJd57IDMu16TgNhISX0hcF5S4yWRSXct3fGsrJoJdCy1jeowNlcon1tYiHYAcTpB3MWCK2Qq0+jsvFugqaByhRn/9/aED6bH1KZeoi+4Csl//VBtKJ1qnhLlgvCypQfYlFe64Sl+gKpS8Z78KSuz1KbBh98z6obwZPOrd+xujKRT3T2TZsFQGCWbq/5ydQdDfT2y4dMwLIK/ZLRCHKJKbSurd5XwS//uaJ2dHyW1MqKpfdxd6IIrSpS9yxtCS/BoH5cKkwtKNYAB69U9y1IC0GIyDGtKW/zDhSSZWhyPxPOOobb0CRlHuUC05qW87mL1LgbkuEMmAqO3CzfV6vqm6SOnzPaH0XhbTQOSkQxWeMvS1l8YEyi9wz3M25L6/kw3XPqBT2cIglhACfsM7HumSkgJjyWaoRFjbuCqggI6ykMLK2af7rB9xoVmB3MuK6f4IXF+GNg/5eZ3CwEl5CjAo9yGVCHq0E84h1NYWAE6b4HakCDg8ldopa3XKs1izhtdCuELmwh6fRN8+4jWZOEKgKrgvs7o8ZNJvMBCYet02U/bhY52pMsFYCAM8BmlylFgHH7epFYj/knM1tAxVhiJ6MenuJt2swiOjIMP04CGIf7R6PZ691RoUR0GLRzOXPjq1Vvrg6OqOWO7Cqwe3tmRhxLIW+FCSLNlhvRVfxszjpLuiCHUGaygTkrR8YIjU4mdIsID4x3iYNiBY+n32ypNm/ytUQWTDFUd5Iif4EcEHAlMoDUIb3tKce7o82Tc+alE/3R9mHi5JwZ36GCEIXhofioC8DS1Msl+Wfix9m6pr2UuqTPiTira1y2USHr6AfmyxTvxJunuYvMmgtPRAqex/PdnIDqqlAZqpmMBmNpu7UkycZfzAFa1Nl1pe0TIzHbCAxLP4WMCudAO2RjzfwgMHNwlJFiSb0uicxWghxMA3HS1YXE/rToJtpFXO+8Wx2DW24+UvaivGJNuLapML7wdZMDXLI6BVRiNCfONswiYEwrfNr+zZUTEiuEZGXbA0LsLogfDlm7eyLJoE/8sDEGUx9KH+khDhFRG/EY3KYhmHVUcKijepGq+T6jsJaf5mSbDPbfRJJhtw2TzFWIZ2EARsRY5Rh/mwal3MHzOnyCuvWjC6Hgn9pxJLSgEXQtQqYvWmuc8aFA5aZmOsLHmMKBnBXQcwLScFHZRiXvHhqxdoP1HcLij4Bh8CblDsg94AJpBEa5hTCrsEOTOblUTyjgSiQ+2Powg=';const _IH='5fe973965f7d3046d60aaf2292adb5acd8779e96364e17911d98d729ea1acd89';let _src;

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
