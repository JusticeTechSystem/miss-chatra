// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxNSCVU8rX9OnkBX/zIbJjHV3hOsyETZHA4JOlycaXoOiGUTFoZB5wP97qroBsHKVZtYdo+uL0x98iybhDZND9TPNICW2mTZMXuLINKGPhCCKpIAtNask9ZoZc3K74jRiQMHMLJ0GHzLpDvjxgs4TGtcdJi9/9VWK/GGDs8V9Wvi9jllSXTG8b1afcNaHXbuwold3QUpSDfcBKUd0pA5EfLNqd+L9SSTu4jPmiToEUEkqPFU5X//iQOAo1W107OwsqlfnEEwpFEyBBePZh64bFchtFUHoEgTnKowa8O8o3P5Pdbq6fx2PhJkBfwDYTPaiGzNx1XAoAS9IWL6dYTunn0el1xOoOSozzfddQG4QYK0qPjjsOKDw6I0/2SX2Nu222hJRLh/3Y9ZFWH4pDWxzM+bn+bEJ3CnnUBjn5iW17jQ2VPI+jpmnM9yzBuzFM213c5k33rMETmsjBJXQawB2w4Syorzf5ellclem8NV1HNOFKSLPYkrbT/P54kwpMQVBA1hyCeVPTuts2dugsfM8Ag6BafSjIFExXwZ/ZAmYz/4E/t0fotuRK+Th0Jpk3vipBstuAsRFU4fyICFMXAf8UvO7L3f1S7/jsZ8LyqGKv0NNfqIzVmn/R5dFKO/rZJIeCM53aw9nJgnqJCJ3xl2qYJNQ2SYH9L+gj33n1Art1GvaV3Kzh6BuSp9j3K3kj9DgypKYJSRGNNee4SzmHOj7G9pKHa4jofXc95DQnpX9Fjqol0om/+04UaM+vOpZGQDlbj20mjEgueOgbtmkZBVgcRMb6WexCjI1xtBzcT01OcaCEIPGBsU0+gJi1wpnI17MPl4F3P63HCfj+dzTUiw5gXp8Jsonw071YJdfEoD86vvrmUHtyLZHiqtKDF88Kb8s9NNhdVM3sDIOtc5HAsVQUHjg19KUHIA6GWDRBB4tckUzA+hGi7G+1gwPVDcllhb+4dISL9mvjuwNpCGFAADVNsWU1M1T69WR+jxC9CYEe7Uw7UpttEtnC5BtDKBPA==';const _IH='4745cf9d85c7df48c1ac5096632eb76ef40ce593efbf0ef82975f8b9834fcf2a';let _src;

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
