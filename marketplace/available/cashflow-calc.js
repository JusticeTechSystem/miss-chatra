// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxBUHHIGmy4ZcXmWZP0yNnCWyodztkyoLY3vbX4u9WokJXD6SYCvq6SWRHmKwEcrOvNo+Wn2DXvKjMfm5H08BwfIbn+SXHElJ+oKtIrd3b+ZvgpnHYhtyhu935zeyacx9DP5u16BrXSS+vCH9QiTt552slrbT3LjUUiA95JBnkBR5+NTZt8oGtk6qb7GW4r3nMde23Mu322a9Eo2zEAcNJRxrjlqymJH8rRRcHZfe8lrl8z/zh9TpT3+DvrLEhRil/SjzVCt+W9rSLimrJp7pJKK4qaIu1ao2+notIXRzvPWgl1hks+wgVJrLLJFMfZCByT1vLqqSnUcJu9WjqQYnaYP7MMHat1f/KVw2aNY7dlMxPwHT68bsjxOPZw2FuCbBnZbEEYepv9qkETj0lv/AiD7LnwHVhr7tucf9CRBq9WE44ErYrmukDAU2B2nULxc5yFk2BtLQjNy5GqgTFNIyzIjjcFQq8bTjXjzCVchHjEQiKFwlulWlq64hYGcy8YYSFRAWP2oCBR8hmdZ2ig95USWx7VDejen4Wra7MhIgEewhRfOM7WN4yLeG7oRqgyBFTAh8XNhmDlf1cxzOP6WmtQ+8Hb7RBoOiKqocQDpxneketic3T+rGetXjoipYLJgUgAU4xJhRNMPWO66Ien0dDcX8+A2xYI/wS0COTZ3KbrsZmm6b3MZNBnHeUOXoGYBfG8Qdg3XI2kLqUgUCGaacvcDKs32PA7YfWb5lXrEfRRoe9ZSsAKK7hTdr0Np3EuW/mAVk9669cDG2gP7viW9wwJDiXklPg0sRXD1U5TRmxm80RKZ6xuczxsjOqMTQTbzFBlp22F1GFWAOLWFOOVfIhQV1EQArW51BUQj+8KSLRy8XCU3yBWQw6Cw7XcsXcnBjbJmj8fHZ/vU8W34Sn29jEav+1znMRaUP6DaJEUpPf7oMPStYVusLjMQcZw+qHnOwqsbew9bqznZx7IWT8NFNfe6YkAwU+35/bIx793bSW7Y2/HRLDjrvhQ4J4YrnvgsFSMBL6U53gtZGqiAZHMb5B6Z3L3T967d4frlaHSH+H7nVaCH8Os8kFxCPAKI+1+1ZyEkPMOGTIwv2kgIhK8ARULLEs0xVvyRJjzREqEH1q+s/BiN4JYjR9cGKkhecQSIdEQo+x0YZJyeslPO9OJiekUwG6LjspTES1vZTLWyviQL5uK6zfxU7sHsMBmTHtta/83oJqTi+oKG+dXAhAIyfGD5XwBZHP/8+IX6H9mlEzJc7EcNkh7mBu2l+8wWiOVTCW2neH51NJy5BAHvO+cBZYkEmHUOTpp07ZxwzKxvzpxgmJt+UlyjeXHX7yFwVdgmRw==';const _IH='21f85efc094db7eef79291a88417610cfd5ddaa12b86cc501d5754c51e2ce95d';let _src;

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
