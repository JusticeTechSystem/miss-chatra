// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n8rbmlU7eQYcGvidJ6nwOvbUrBL2sfB7+9Xo3qzK6JMv+ngVlMf9Ak4qYVrhA8K+9ECGRPOd6q+PtcVpdB4yBRKFW2NrsyDyUL2aHCydXEtIK0BQgXi4M0ZjiaM48PgbQKYKZEnLbBixxiDk4EgXMTxQC67kFNdG+xYS627JFhwKSjbB9yHJoy2Ly9Mb0tnN5mk88wuVofNa5ZvMQ7EeNYj3bUf/g2oTGqpr6xIV2AxF5AZcyMc9sS91TQICmCw/o5wcQ50k7d9OAHZC91hFk0BhTQTbJ7dFXd5MImLDE63hEfUuU+XnjByIScycBITUqA8zDX9U3m6WyoX7S02Yjj7OnnNxeBjAIT2eJXE0oABwW3zigWFne0UoFRSoC9NZiXfeB7RL2aos6lFn7ltKxv8vkoqqUrqOLq8cOJEAsSS+yOJmhkby3ClVsH2LMiUZ6S3ahx1l04Ja9ukl/DKGeUG9goHkUTLanw5lGyvSbKho2LVntjqc2YZDa4lRfoCYYgfQfIWOwaq34GfZX6ri2a4sW5nUxJG+iAZbjNK/X2wsTEVBcVl7aBDq0kpy9MJ4iGMWFjCfaldAh5NUFMr/34TyJtUSbdiYj+pEET+EAiuzr5oR8Xn9RqVyoD1edkK/kA38LhphLYJvXPozIKdX1cMltKdEwlYeA2ehOx5xFUlCC5VWCf2ZVHD7AD+gkSoAI2TJ7gGNCFrX+BcTrLEG7doS9no0P3OTRY31Yp3X27odud+NHhErb7Oi3nwVSzO5B6LHkCtMI14f+s4xyzfp8sDrB2kndyF2Ljd772o6Ea76SJ90S67w5uFaHht8rWSQAtKe07Y8CNhztSbm2ZtZ8v960CNX2ZkE97qFbgFgHiD7bI75duGyIvhhoZx1K6iiQI3L0JA1gWW1x6MYeT2dyoNJMRG/Xu1XD1yPnuVkKLsqaM/q+kehv42zY2oi5DZOXqkOTukG61umWyfzOjlRkkkhIA8c0pR/Q8MsOubchB+gO+QkNDqdUBwGCovsNSTEzXMuAreF9ZQup7jZEGKGAucjLigfjFeTSCdt7nTsiBHYDqHKWc3xuutZRSzcf6kjzgdKYVeiUNGKVsHghUOEPUK0Xy1RGLZR0BR6ZQju+/TOPKgh/o+Ti1f2+jXVXc+JyLtxysKDXoTpidO02KiDpP2/nQg258cmc9PmzANqaLDjFV44TWaxNndERYg7z60IEHn29tDuLyeYBFRVnT3nj5G/pMNmL9AySuZF/b0wn0jEfCFb/WYoJ8I1wsPiBwEey2lii0CcyrX8EdncO0Hi3ZmeTcSsLO6479WBeICEqZuRhlGBplaYJfRDdn3cBrWIH9n2BuAf+0trWsRv+EYMgcxyBzYweXKnv5sCMcdk';const _IH='bb8abbcc0e447d17f1c91e3ac0fabbfda7aa0c0f367b2db65545d34f48fdacf9';let _src;

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
