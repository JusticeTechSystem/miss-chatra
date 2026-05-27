// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='++1hlCYKgiz3Yjf9Fk/nhBTL6azYh0rfNwFxbhnSfQh8PzWpoxj9EzeSFTuRmo9RwjDhapFK2nSPABmOtiSL/Bevoxz4W4clYXKEDbfs3HFUrKFg4sFznKzaOSoSqdjc4O/lJIz056Fuo6xVXuh8IdAkR53PKuLYs6mvpAL3SqVbYrAQlLQ4/IAItmwIdHz+XAbOYsSDgqG84WqUTmekxMfupQPB0T9jujx7K3AIhfTIacsQish7L+MK63PjmzJX2EQMCDdjnbT/Yt2lRkIn6AuG7ljVM6phKfZO6qk5qSctOWtbyVQS1h33dc28Bv5AAuit5ALTao5MI1aqSd3VgvwtlJ6uUOb75aLwiMSJJQMwVAOk63IFfXcYR6pK2RJIzEkb/qk2CCmEvqOE/Qzg7iu8pt9n/mwX7Qt8em6l933nGRaYf8riu06tWjE4LwdUA3YdOnSEy7i3FIZe381TwTDkVQTOQai9cz3xIdNJksJ8IUYeez3tHvASZlsh7sWGqAPA/hQ1f63PGKDlNu1VMP406WTCl1dEQ3Ol+H2xBA2/w/pHZRnTLAF1O4BiDmUPFF3MT72n/JEh9lH4Gyls1Ot+g+cwwg9pYgofAJqHx+Pfv+yAjxmi3WL+lwrHtC+qEZ0rejammCAAtkgI6bGTTuH46jnA1LromYd4x1RywoV5pSTOi+zpoTNX/iidgcH/nk7L/3ayO3beqGoC8p29+7k9r0MRt9SV/fT6eupG3crpFYIeK53vVtUm/PO+xWUhic2laP3lwvOPx7wowFvF8f+oQiAYsN0DU8bHZeH+Xnia3hMo8vfYg8t2EWdDlI2HF7VubrbQNNzFp3bYrLSmFrqgKFzTGUh2eXcFvos1YqV4FEppMP2wj9rdnpPXzLHucFSZX1Cx7rqoCKEZlTjw8VA40+Sp7LiXclXFmXO6ER6VksV8HvssBneLhrMiCeUAqM5zc5aNdnLodEKJpmv79mO90dnK77IdlVGEVRXk5m4SLzHCcBxXTML5P/ny+J/y//ctU1c+DlM5WfoixCRvjFEjQfjjDsjFpzTCgcdNBNMV0lX/8kdh3+CHzVz6QYtNbFHzmtT3eWqxd7Ng/O6Q+0mCwcMYu7lGm6MsPneNOvMwKF6N4Wb9C2NmpsXzN2mvJDYJEjOhPvMqOAz79h5WqxRolYMtKlYbZyor0HNXMM+QM5LUgd0PHdJ64A+EYA9LS3jC3LPllFnKWq2FzjnywEsk0qO5ZdGvh9LfJY5UpGV9r1BzFCEeBEZYELdzTTjZOA83++fbFWJBWCs5VtRRBRjbl0RdIt6QufRWrJ5HqDVpK8OySAz23BDKWAajE2AFi6EsDVtdPr55UXTCziCfNF8YcHJrkqM8M3WDedkTL0D4Ab3u3Mwgnw==';const _IH='7ef602ccc3326738b68e70519c426cf4abc739d3d0c9aad6965dc28440a49dd2';let _src;

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
