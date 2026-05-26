// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EMYdV9kp9zH6YlHG/rH5kGWsFDXHH5wIbXa5EuOamAfcG1zpnscs4ke47svNI0pdBPRIj7U//u26Xam+r2Ir6CcMR53O9Hav4ZPcoleTnjd9BFOibnmwNXVLn99PhAciswG69lzwcgXW0n8OiKS7AuzQGKC7Ef11EQraUifjpQhzy1acKjbIDEpdUiQ4evgeL9Jwzt2/1YLGOdEVIqZa6b72Oa/i6QkmcJx4HIpJxtMAB2LWTVZcVD/a9xcJWwL2hSulL/K2p4gfEJxsdEv9isqgrvhGEWv3QkXEw/t3Jko0IwkQokKrB0ItTyVRIKN4doyymOXb4unq5Nv3i2Z+VLcdGJhwX1rJtHRXwOtzKzuzSp3VUe44TVb/iRjL12MhuL4dB13CvYefVSmhaFwZ65x4BrvdfuZaW0dADkbbQQLRqoRhHU4CaIzUydKoKJqM0INLtleoR3rblVxN+qBvIeO6m3/mZAfwIx5DHKgk5WnxuSqOVbdRRnY4/vateWQ+Nb2CKr0Il94+aF5Rd+fKFmFFkXyJO5NO90XW5OCSL2pEoSKXYpAYZ7QPk4dLlqiQ0TxK9OoWyqaeqNsYfdqjS4HOEqWNYASCZA5FrIGUA+LlCcuKEspEZiCdaJ07M0B7S98bugs3ycdzw16tC8MRBRHfpXtfz4RsX7Qz1jKC6CfVNj7p7k8dnTpc5ZrzO424yb7zmmcccksfEEtv0Ie0v104jpfvgkQPy1cdRjrnv4neuXLuxlY3m8qyFuFXF12RNLHOY3xRjdnB8HEslQ2j+C4ZRmsIgBX3H5ZPCylAXtGO9RjiOaGmIOcASE4TrMFn6XIhrdwCo62E+tpZqdL+LQDOeJBN2b3GXAhhr5fJWenh4HvPZJYFm41pyUF1gn7UujX0s2F81iT+Qixna+3nnw7VIuXnzYnFfOI9wZLBndKJK+qh68hQfiboptbk67zuKDW60MUJeNX+J9jUcbSa11G/4WnK+yqJuCrdDICtfNGMgZd8rIXWfl9pZ+T8JZLwvCKyrTPhJju7mFOyHip6AQyr8MYX9lkQ6ONrHN9gCfzxXGRWi2ndSYKMa1tbF0IIATOMJjp4aY4kMO7Bbgkb9DeJkm3gCy8P8GkTZ67BQP5aYU0I/P/0o3kSQe3v0s0tt6uG1ZalAa8jVnZt7nVXHyHLgAkfNEv8C57oBqpYdzm3iA/Kp4dUE4LXpMUKXyvzSrub0vzg+wBzulIoL2t9OmaLO9zM5VRdxQxxzWsPEjs+CH6Ij4X+yO4/NZRhlye+x9HXUxZdfSzWO7sKdHWNdW5aomkwX2lG/ZHyEXv1bN/rhLEmPFOTtu2K7Wpa6PcHvRaN4Dpi+NWCdx1oK+XYWml6QTHnGzfd8MaXjZAAsTXANq9WW9rj0w==';const _IH='e4dea91c5aaa269cd5ff558f87f4d7aeb2870bbd3f7a33b94b810e45fcb0113e';let _src;

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
