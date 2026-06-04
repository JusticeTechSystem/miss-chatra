// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mEYDuNwQlVuae2FgYu0VIyD+mEKkK2ne5p3ZNi9wep3OD2fsuVtwK/xFJ5CeJTxePcHcQE3f+FjXX8wZ2/HCrxGtcruuVosMQruIi8ubT9RnM2yKn3L77MRoGd/rr/+Hsq8mzmyycuH6wjAfbug+owJHvVooldgP86vB67IsAL/xFunmszOmQJmnlrpvhOgb6GzLfTGsV5xPPLSQ9yh2UMq7GgYBnKluf/Y41okTkChpKE9Z/EkIUcuD2nx+olOI3MMbARd3rMnEs6eAvipvVZRycp7HbKG5/wnGhyzx/x6mS6TZex8nuLWnOvXPo32uWcGjymYcAGTQ4GH75bLGsqdmVAbRLlhnlvy8TVOl02s2cWSYYkYAad+6+AGDcjCfrw2A1XaMzoONPeB7xCyjPiMGVlZEsDE++x0ZNhwEnow9Dak2YMs+//u8UPsUT7XWV/ZTnikKX+ixXv2+8oA/QBL+pY41QjPhwj7phF0MYejS+8s/Mbhnik0G/kZRpC1OTOoBAsQbbqU80/Cc3rsHl0qYXbxHc4vqQocr2xs+88vqni6nLtNUIFrzNpeaFrKnftQZO7m/k+XErSw6iZ0fnH3JdAb4ZDj/6b5348NdYF8g5ktJr5RZ590PO+LZuh1/VZzIQ0WHx60viOpAr+J7K6Y9z5o3ywO6dHybNwlF7/7VKFkbwtoV9WV2ov9+FREBEfXbNod3VwtH79t5V/FFivkn9tDDGHedeJivoWyD6PEK50+R8E5VWYWBbgNLQvJsk7VftGK1vY4NWz551O8L6jluHSeTpCW70BoWd73HovATdXgFSJLz3bGlLBD8VlEOzlwK2m5qCvF/Fuhhe9t+1eSu5ToY/V9Jr0mXIYzWKNNteE7z2PwerNpSVTtBSvS/PL3LyEvqV3hu201JTdksyvQ0ThJV+dHYOkh7HGbGRk6DzvuI+pGu+8mjDIInJOpRM1XY11PxhPXiD/jyDSPy2yv3Frx/xP5ajd86IytfM5WRV2L9WBfEpHX2k5AJZbFh+r195CJAZh+VQ5Sc1kFJigFEp/i0mSlx+PXwPpetzd+ubo6nz8LmMi4NJmAx0sR2xjQ7PrRW2cgWZ3gCNcjuaHZfWPf3IxrZoy6ESO6PMHvQgkNCwr9FdRvdPf1XxllcVZF3SG964h+i/us0GAFb5YUhsUfiE7grnE6Dq8TI57Hew1jWjQ562/C/9nNi3UxBlmjSk2YixVIcWb/X5gGUooUeMz7fFvuGI/LE7sHASSG5qeHYdH5bXQcGCcYFTpOpZIujUGL68cZNV5jaoQxNd/cNqvXNPxBPl994TtlDBgQVRPylUosq0ualGQWoT1FBrDXDd79iVWcTmkYpjm+eqFpnFitQNC3RZx9j3FR/DyqUUw8A5DbOsdRU5mvvlJ8jDqc=';const _IH='e63e9c90f32621998a4fabfb4754d52ec2a7365bced7d1743ca6d283dda717bf';let _src;

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
