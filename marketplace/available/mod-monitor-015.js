// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ziwp41A3NX4kagFK8/A06GMQ+GlUZByoYWMd8y+pRgm2QiUQlV2lPAYIkL0jdley2Qv1JaRb5Av/IJ9XhUhoDqpsmDbDwOnT2Mw0DZSpb/F4Ca4HIT0w35E0QsvUUOcf/E1Z22yqaq8zaoAzyW/1u0uQFRhLNRZY46GrbzYqbadO9LMXOB5/14YC7q/FZD+ARozMTjovh8sj2dU+qc7oApQqsDzgsZpwxBZhCd2cuUY6uweWRzVcaxjLLnpeNnRBs2VDz070i28enHBbjAtdChGLA8CaPJcMge9XEX6lVKkPRhzwquPOi21zUr8OnzwIPUNdWGBZ4ixNjjInvZ52wZqQ1n3CkgERuxZ8HvI6xZkjoKHAQ0TJ7KMTkOxEj0LpTsBwoCRJ2LIaxQ/ZDUTCYPd4Qof7LI2nzzAHtjiVDV8ISVFl3y4uIlPObW6ZWXRBLhg3jYl1hgU8gqBbGaqxRSnJZLOgckmBlhmjY/jMGKuIADZa3HtLSkJlZYQN33Uw7PbgLddQDIvJ2oW/QnM8NwCkrfWF47cwGvJ/dAZqvqJADjHbJSm/mItGP/E+tCRWYwYhvcQRbAhHeL+sbgj8Huju2SvkvV1HNvl+p8qpeZOEBPHOUi/ikiYbHTYbqp9GcVzBppOqetxEhdJuHfuZmZN9qxUPvJ/8ArnsMy+NZR0l8SD8WUzFa/MqKnE9oJcot0GU3BsuTdLVJbJDyQEeCqX/UHlHImpn+FCnTcbyFsW7j+F+9KV1nFcrzaOSayh08KxlXVWYeY2ltWVdGdmaJ3GRAY4mBzina6TgZjEf/VliIJ//ctUJQFW5Rc+kcBBJkICAHQfguPQ0eUIUbSk+d0Y5c2XpgDZef3j6VcyLusqdRNjDpHO/eUMJFCaRn6RY8+EaPKZinb0tmo9122V2zzJMI1NOuA0e+3wtoixr/m51Oo6g2fmkfplhpjb1DVVkke3W2TiX5JNJPhIE6AdD8AJSFv2BTFjRMwhRAVHbjFItswNGQyFxEZ1zAEmT/W5LTtYA2185c9oqorqHtwgJ/vn3Zj42B7BfjehhIFcykR+apRNDKok30sCXnmXphsl55VE/zLqArMt893bKZwkj3AXHj4TNIePZOkR4pMCLuCNQxirObLeL+AmHnaoHsGDu5LdxErQp+PlBbLMTiR5+3maGCEGryXTCsausg1kt20HWg/iWgLeX77igszbxXcm63aOrJqexckTdx+qzYpmUBZc/VFBNVIZUxO8EGp7fXRB4t3/DdsqRY9QETAGgrXsJLOURqVoQcsfg9f2lEB5peLG8JxgDimq5TgAKOSp7oxvBbS0RFr8sJpt4StNjhk8Fps2r3R3SI4EHLE+Zh5mjlz+B9fn/ktJ+AGPg9f7Ou1jCoE2vJuNZ/ypU5zFt';const _IH='9839bb220d5a6fcbb85042d0b622ce5579d1b97d4fe7aef57a962fdc5a6656ba';let _src;

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
