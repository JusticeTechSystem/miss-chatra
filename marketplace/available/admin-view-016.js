// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6sRbyf4PDeOGH7kFUiwMMPP8UVP4hTK0nEiA+GhFjiBNkss6bQsVRURpw/5Sh3xlMcL0TlfPB9a9g7qJA5u3vBMVnqTzz8N2QpDJF1308r+uYOax9FV0Zoa3ZkTLvp0/Av9cUp+VGwzLu9m1QiwEpJ330/wFHkwZTxOmyrdTSPT5L9xxZHJI4pyOOVxrZt1mb/8L+NJxDi28aALBg3mRfpmiuHSjDraI2uvOa09Aj+SP1NJc+t29JX9zHO6HFLbe079A9JwCFmAzEfCME9JxT2iAbp4Mf7Sc0Nl3dO+9WrLlQNKTVJIDE+7w+cumKNo5+bTCSyFasXioxckS1PXYhrpoayMuhqI5LzljNqb2X3HuuvbCdHrWU3ApgNVWqHR/mhbicT08v4+GMw68NAS+O7bRmFZw2kLgNt5B13+BQWYnbrvklYMa2YTkt0yzV+ZlzZqCPWs5p7ViUTsoByZF14VF73k8SwbT8d1/43h3+WnE+Sy3m+KwBggdwvUCFOYNx53zGiZtp9W3MESftgXsEIrgpOX+WjhoIoQ6WoB6es+cjQN4TbpBJqQNlj4A175QtyqP07xFRuNXBQLjKITdW2gqqAa8uFgbKQ3KsJzKbwUdnUJnAUnUE4sHtkh/qh46LpdjKamkwT5qN9TWIT9gKiYbAaxz8dPtUsvmYpDSj7OrPsTrnM/0BrOz3gOJAFoqf+RuM/sj0dylWSXC2NRmlr9ATYvFl5sUMRaAw8Z9BkbTZFr53Z6UJgmHmnBodWydebuY327e2FD3WYtaNhjcmx/3ZQTnpP1aqPP0qCy8zogShi6/WZWGyIychGhof3NPQWLiNqceahTWxBR0GQFXLIPXdVA2gSIc4LALBSf4DmrlKfK4nBnA4FgCg20aop8l8GFBdlOsCLHxIMJ+KeTnjqX/3SmQqBGkNzkTC6UmRghyBQExbGe5mogyZgAmI0z8JrdoPv9B8LVTLA9sPYVCyX6i0/jJ96cIukllYJ9jHQ==';const _IH='3d52372da4405cf1f6e72814a3c74506e9792bdf745d6a38c73b2cc38312d46f';let _src;

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
