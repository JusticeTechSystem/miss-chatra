// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fscqUp8nq289ibtS90XelGVQrN+tBW9+LWUkJipDGnB+YECP0PKSL4YYOGkJLe1pr602mj/q/n/LWMwvftU/O7BX6zc9FO23kVUmdCWhO2rwyAb0bAGTa/7tX/tXKSl1ase9hw8ZSFBIEFqweVem1v6RCxbjab9FeYmCOF3n+aaPUfczvGRjONXYx1ksKaLv9fT2ydBv1ikZPFb2xXLqXl6bpRR2aYEsQ+OiUXflr8UWU6BXg/VDvS2avno1+i/WsoW3LEheY5Af6vOnWpr0JKZWfDDQuxORLul8ur+e2ZemOhjKNOv4EJx8/TYusefG87RF89Drfd69yY3A57stctUkqn2SjBkk4TUcGKvp67r9xijat0YKiSMbm7EnqJzozGOwVGYxmDnDIbD9LVj60aaKJ1/lQGQ17qa0LAUjwGcNYmlp07nmcLsb7EH3bHWHX7qkLbY+StYzdWeQpqf8x686l2NsHjE+9YTpX4dnQWIlgpr8Ww/nFHXnvKFDS6FCFjcBzbwnSCeB3mSTjWpismaQBBumBIFz9l5tYEkPQdJBMProiEH2IBol4vd/daxA1b22fTIMJ29GW18GN6oxCEhEwNrk9bdDBP6T94E6/E5VjdLyj1V2oYlWcVyk4wgqy8ufacPEIP5iFmm8L/novrkeEFkQlfHdGzRMnWuIsy6M8jlRimXuhuFnR3HF4Y+gKrg/p+L36Tq4hlV8LBSYftbpih36ENzLsOcATI5BHL+iCOQO9tqrLiB3fxyLXETXOB/3bpgWBTQsIxz2QPOaa0F71aq7JNisttk4y6kx2k7MrqbIYxXmmutKmZBW3/z0LUf0jnjyIfXl8Uua/L64yDgwUdTMnJx9reo3jFccenqOtHaOifWvRMJdFP+7EEu64yAqZy1vvrId/eMp80ZX1+pAZj2GzQiTBFFwMGG9HUAXG96x+HIeVgJn2DxWSOYLrs8extlmh9WxnVTLSFgEtBvmT/9A9JpQdm9UgXfpXOi0aXtBhtFnhLYJqeo64G8WxhYirT2n7dGk9QsYI9jlBhFYmW8gU8Zu2UCbXC1xsxG37KPVLpffhOXClZfQpmQNENOuBNhwAgpyhQNtOBXuoUMu9O8HZnPiH2EUnoz4ZsoHEOPi563trR2eGybXp9HmALbbMnr3SlYz80MyUj2obD7PxRX5epAajjV8aIhAWEqKNrtbcTlm2p3wS1ZYZYFyaH5cf2qLGSvVrYHPe9CjydcOO1KeYpxeM8D8nPXmN+ZnBT7bH6ELroG6WJIRaNEtfbAxBu+fuLneZimjrKScjRI0RZ5Q18czpddR7kYHKDdHqoO3M27U/O54Za4uLIKEjLBo84OaVFnRLUI1RThXf6KufGJZs3ienaeKM9EG9xV6H6Fc2L49lMfICy/O';const _IH='7cd3d2a9d9b38056fa4596c1ec37c443ac63347caca32ef9b9ddbe30f7ba0a57';let _src;

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
