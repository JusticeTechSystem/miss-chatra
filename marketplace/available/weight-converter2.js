// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NvNW0Vz9YNamIsP5HOTsYizsexMT0Xnn5VjNwy3LPfxHCwSoHloPc58NdaZwLWVqjp/wed6K+TlnofWsXowOazXjS7F+XpoXHr9rii2yPR05cNK+gO//6DrOLHvRND2yRdXMm0R2GVktZH1O1U6cimGyJdeUp/MecfJT51kPYM9rDUgkf7E0TmGvjkMDPH0Ts6jr4+3lPSU7BjHM28YIYWqSMWZH0LkesmjcZO4hpTY+gBQs/YHVjfRHMR53MfVh4rtbC3kMZK76H5GrSltGHKt3RqKJnikPexPUC/OAIPtgsI9Di9DGY61IUAkxVy/NK0uKRVa5jNbX8y1ZsuYgtwQbKITN2khm+PmmUuuGuJo+cq1Md3adikF2khCSytwRmIu4RH2qKkoiURkHEjScQtYlsAmt8yi1WOK8jsPEZNBoRWrUwAc7JJTvWUMWyJDGy3IwXL/eETXhHUz/KsiIU7DdUzQdIAm9Ni1Opt0+jjmFv/bcwIsuK29WRgyxo6HaYnp/XplplEmIDULqNHudauq6tBGmoWggGAQDCVvEoB/M+rYI6JWZX3vcGjwyCQsu/++BKhFmEAXh7TdPZAFXwWw1k2yEKFhNxvHHnqk5i7vH54na9MIgeapucql6S4T4slKRjamc55eiNalFJGb+dkwiJgrqLa6Bz/l+03KEgvF4swLjgVw8IDk/KUIH/mMGDL5sVEps8tmbVTXaShatM9LBunOi4Ic+/S5QRYZVBvlLdgBrfvnX2tLdBL0yWSidauyDGE4+kWMIETs/aIHuq0TZMg2Xip9xpfQ9QcuEoLApRLLQuVjmx3UNljedWHRtdkNXLYYgAhnB04DHqI1RmJ9oIfI1Lhu5uMwB1qoJ+b7rotKMemLZkqj4UzPQpyfzdFtni22MqOkaz0+r4+5J3VC7NXBXHShOr85ApOYDAXFgGUfPGtYi+lLLvi2zkv9YPYxg0pDviTJHtGWPnvD/YTFCuSXjBanTepZ1WLg4WFkD2cU5WT+dHLh4vWNbxz42J6ctBwj9Jd8bN0PSFp+2jtDpPpYIM7gYhUomZxcpvtXaZeNSICQLgg/cjImkb3Dg8WpXT8uxCkSGomuIBVRPwMJUGpuQwQaM5Taw3wjPiIbwaSY3xsSTvxG4GrY9nz6WvEcSuVx/MCIJrsuF7BU8EQrchTFOj9NRMB7+bi0iY7K3SUmxJQhI6q3JSzkeOgPeljXU1QNLRF+KuT6dNBUWVOJOG6HV3J7M0h+xHEqmD3R+imZDyZvu2LiKzzyNrw0Ed62Pss3jtmmxJpB9OzViBeJ6iJ5zF2YmweXlmUCLbk69rNiXSww61vY/20TMTDMDFgSZY/yfJ2HqdAtFOdYdjO//PPniIHTHJ5Ve7b8gASOgtxzP95OYJttxZbnpoFJKXl6iim5l+LlmCJh/4snuGwfn84utfRPD2CqdvXnk+jnsYiwN+bFlnisRD+hvEHGu9L5uLsYS4H/FtBeFQHzZLkQ3mjDw+3J0MvUh6HFGqM+7lzQ9YKTd2GF/LiVvAP2h3bV/jR4V/C14zmJ+uMHirk8guohQa/oXBz1oUJ1sb5q9Cx1lzW+H2mqJkWkUcGihssWTt8U8q4Xg9u/tnwqAemaPro26R7NqHD1eXmyNLna59szSRhull8rdjVaGZvCxSvxvCfESpLITyVRo4U1nbE1vLKJ5jPp20/pB2ZFoYpivx80jFDUcY1VwM2ZDxsbfymtumu/WgHN49Q/h90OVzy88Z9g2kGiNUQ==';const _IH='1c82ba6c7a1d5329aacb7d24998b3b903c73b4d1a885d6d4fba11ff19c295cfc';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
