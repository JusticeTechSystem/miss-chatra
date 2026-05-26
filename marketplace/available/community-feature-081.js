// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sxZt3ep5DQRzehAY4BH4tRvrLgKuNR2QRvCr7ugT5OegtMKprBqdOxVYtVnBQppkep7XCwKsx8ZvZo3r5t8oRgpE40flKHCVHS0ItRbiJEpPH0n2Vlz9OjidFTP45pwOvYLiegdT52JvvPCfTC4EB496A62Ilfc1rPVJHjGOxVSUFBt42k07nmNdui8h+z2piI9PCn0e/E1PCpZPp53pPX7piUgcUyn9LCy2roJcJZxyXXnHmIqFxtCAxgKcLw52Gx0S9XyTyJoBo2Nbyl1A08/Bx/nxk82jZk1tOsBoIUaQlklqdroyuCS5JjDS+I+LBdq2OgnHJdLHpRqYPaEdC2cmfcEynxNkjmWbKRxfxT4BFeUe5uZ6NsGeoegN7R0GXuiqrnnTyftlEqpGPiKK4zxpDCbYZljIBlu6bCzS455AVlhz4ABjcKEIMawU9zXP1W5QBG/vYBKtEuqvqvl/zUrFX0L4l4jdTTiZYt1o5cKEU0yasSIRlbLTpqE10HQJIeuso1ni50L5nEKTkNn/4+hzsfmouGi9UgYCdEnP2VuHdh7w4x0vugmpBJOOm4YQBe4RVC2AGtkfvqcxivlmjCp26ZWHT1mkWWnkVCbtEVOzkM6/NWHnbCrYpfQY3bthtebsWoRKPJEYP7K+fZ2TAyeB0cfuu42/yX9fgWe2tKY6W1+XO9gcgMiQe/5AAi9Vtwy22nlzhWhN4Q48Rl4/cu85DAY=';const _IH='52f97ea40b39147127a7abd56d6ab2b93da69d6e273cb94a0d69693c40ac9823';let _src;

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
