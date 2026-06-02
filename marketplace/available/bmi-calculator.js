// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/kaFPPR2yU0cnrWc78Vv3IX+pPkAA3+HSi+EVmMkWXkaq3jrbc18HGKxUwItfhCtX22bzn6OeguBaLeEAzAqBza19ZDmlgh+z+Piwv+/M/ns5QcsRsmslXocuIxAA2FpUKP49QILBmszwoaihLG8jpV/K5apbDhgMn8Z7tHJM9oJja/PFo0geHGH2CVXKc+nnr8IR7inNvCpg5D1LPX4taQv8OrU8cwDGFd2qcyz+9l8lvsBab4o09jYj4ZT8yzEC7vn69rITVzkiGSIri3uIqvgt/25ULW09l7jUsqdxKAJ6cXve7Hbb1evSPeKXpB+H3s6dViVXRB9HUaIx38Gz2gGq8cTP2llZRf37wApvPX850WVCy2Q8WM+6yDjfw5ahQDcpHtkDGsPni4xd4dkNxOJXAADkCO4XAP2SNISNWhYZfZhY6atbAleuMK4Z82cA7x0WECeCPyULuI9NrOzw9yg433x+ZjI9CRGGSL+7yMXo7dYHV2gg42WCmStsb+5vtEEJ0vVEYIb0n8ruzxA07B6eVc7eCCiq5LkwaTqedUju49K0gaxmztkSZkZuN3AHRVvOpMu/SvHhIQiugQnlmdavf0siYtBGIOVjmY76Lh4bIxeQKIOZl2e/dCBYXOBahNRCdtYObMuWsFuvQZfK4n9N3/myUrUW75d+J7kKGkNw0EIuyUVR3o7ZbHUjAB5r+re2M1VmRroS5e6tpQXbC3zFN+o3QBg0/nNGXvGxBlAxo8vhHzmsQdBqOa5pAR4r96Aajlc352QRU/W6Irrz0T2wQblgGeoeHBVwbwGrGcpcXqDX355vs9I2ZFv4ESE/CxK/0ldk18aM/i1cJuVSpI+hOAMMh4h8m9pExBA0lSDXCTgbl6GTWp5TN0YOfSzvdFR/stNp5fioJRZfMwhdP1mNsBLBUJ+yP5KUYvDxGjQLuye4UPdottx/ohFK9Q/1yPqWDTB0WXMrb3dmg99v0lj48fZNZpXNzd/eP+wFicP01fcdNqco61R2eONuCV17dG+3qHedD2UETB+T8Nv15TQVLcy/zD1aEd3L0mG/IqUMAjtmNxvMLUyuZGlb5d9jt2bV55JzM5HUS2teXrOe/9XHVGilP3rPVopLAD7YpZFtHti3HYPtFY37G5j8iQKMHGEbuQq/kjmXLuw7U/VTPmvdv1J2X6Zn1rgISV5+5NgZNJ8s3mdgb9Fu8uSK9pAVVZHEKXYiA+0AI6qOo5diljQSGreGCBrYWSjo49fF0pzq3fi8CvnWizRK4E13FPdG269sMTi8/hu0l2JJmMztw4r07RdyvRFpnk/+pePFH9J7tne/uChIN0/HsK8vSpkgJYOZ3d38JDlkY9CB6Q9mLPMobMvuuQ5oumawL99eJQ+/D4hO2quNPtbg2ap75IU1dBdmjdNa3Ie1/e9kGOa7UArNZsI';const _IH='ab705c46f21ce2e9f7d7e68af5a4bc07681fface7f8db890cafb4c94b79b9499';let _src;

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
