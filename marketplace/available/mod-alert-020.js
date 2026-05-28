// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5qjzZjvmJRnni6rlS6ASjnZLKFcO1Z0CgHNzoiQYbTxISl7zkrYcHw5jNLXP3kyzGK1f2lIx6UjaaGTxORtBAHLr9dvBdiYAsgW3YB/gLKvRm5yDRChDcGHsZHTLUj0Y1T8AcSYr1e9ccxaagofDS/4r8nhnz2vIATpaLxQ459cw/S4NxexWgQRX8VifWfyFtxZnqPQiqsCo4eUx+F4k2ZGVImyur7ij5RZx5FGTjaSIlXJZ2CwLubigQVI6npZGTaCz85R3MtLLtohpGgpP2ker3X9yLw7SllJ2gkaUFzxaE2Q/6SRi0yYMoUgxk08NCQu/JXWi/CyI3QeuNiZhKzZltS0LsyiVXxNNdllD/diTe+XI3q4NwyEGjta1JY/PR+Q1aVpnulYmfq2DSCfdo8t/sFgUgneX2SteW6i2hpcZDDWLD67Ts4jXW7rze2IlqLwaYEEKr3EpvyyW8MsgPW130H12ceHjv4WmLbQO//CUOvAUf9l+HBiXcsjR3OECQbN5k1rNjUuUrlPT0HVZ61ZxwptgzeMtaxOvOn/eXvHIUuDIV4QHceTHlvU7M3/2QbqdeyDCwMml87R2Go93fLIQS8n32UQ84+BMJBmSwHWfBqlWhvETtfVhO6Y8Y9PUCZH8huGgd2q68ogiS6+SN9zh3a8Hy9mpzkIDerfHkJ/You3fTshaFSZHwSMNP/4w16xTuP6cb+f6OOyE5zt5P64U4koIfejaPf8pYjx1ou5G/aj/FyIsK+TpVDyoeXXUbJEGiFg76/68n2GiQzl6ZjoGngdydWqKTctrjz5HrmFf7znTf+n/5c/3UsOOj1XDVF+5OjUvBrc44ioWdObWbe1rfUtl9f+CM+fXVfCfluggaryiEj/qbRN62afSeRLtbd+Qv3Fr6WgtqRsIx2ya3Yy3hLPZIYt1TmanX6uCdvxk48Oq/ZjcvL92TIMxCtWVqucgxC3PrCZz4eXsZzoZGZt4q7SnbsIHHnwNEhjsR9Y1gZ0eEfJZAiLjes6elYth3Vw+Nrn8xyK1GL0nCg7k6yVXlenOsfShTSPnlpIGQPJYfhSyzjKhZcYtqtnq7IxvMLB0YkVR0VrMMqA2Hshgu1D2KPgmaSj/pqpZcGzpvthPgdbjCdJTRPMlrfMQrHFW+36cdsYgUf08qUQwMMXnO2uqldJ2ZrFjpMf0JfAB41rzYif838n8LZyf0Y2utCdWro2s0he3jE25XFCsGunupvsAPxE/Zpl78u8EsA8ame3WDkq1bdXkCxzK7jHiHXzDDZSM/QuHu4BZ/bt+chQGXa7O9qk1/xI7l8Pn0kP1/GS2OiYIIFa41Bnhweq2YQVpnlex0eBV16w4+I2MGC1umDWGsMn5WNpiNQ==';const _IH='ed141920a70b8042da71c23764fc7084c317e27523367bca980885cb9092777d';let _src;

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
