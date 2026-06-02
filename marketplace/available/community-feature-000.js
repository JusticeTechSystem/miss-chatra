// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K5O0xdAjgxGEwXdyj5oISQlox3+/JQAggF7yANWKn483ISpHZZ0yetkM6Zbt0UDX4ogKNsX62ScAqlEicSaBzKWV2GzoYaPnb0EmdXJN1hRo6U0os7IX1ehmnvCoVZZIQX1P2/d/KbwK/sdixEoShTz7tDxiV0weN7d/W2HYPYBczo1V2W8GGOo26PfKwqtbNT3+SItvLa1b700RWVIK9lrHw7eLRsZbChEpPXwjOssk9VVyc4FvlORiW8joHn080yy4ahfD0YsaIrQnflClVLAOFlACC9IWtAZOm9M6APAPXfXug4put9EDKc/Uf5IA/ATb8XsryRrAlxViiLwQjRqDxG7e6Tzy6MYcmRLF+2HLzbwpjkB3RgOEjMcFCo5OaChfttkeojuEfAJoWe/psdaPic+Sv1YvIQuw0ajik/nNmdINmYHhvLk50cmoob9Yfr1GmJdOgAT8xk5U2ONWanLTPIo0McDggv2Uc3ww8S4b04GJN8/ujp0g+9z1mIMi/MxlshTUz35q/iuBK3BtU+MZbsyzl+6np9yq0LPCnp7+AwjjRDW4L/IOUCU14bNg08uX1sNozOXE3HN5evr4aBLenkzDTlclSWPmJl2L1NOuOS0156WL/e3YXbtJiGiMHTC7BIHwnZZclh5G5Gf+leSLN9mwe5gETfBZfgBTvJzg7bM0QsgpGt8QKIarBJHWKtyKDrOXNrjYhnW8l4pwo3oVo02Kn7xdL/+cdaaKLWTRgw==';const _IH='de0061793d54a394ed1f002f18d3ec93c286d4ec6ff65f7724ffc01bd17af113';let _src;

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
