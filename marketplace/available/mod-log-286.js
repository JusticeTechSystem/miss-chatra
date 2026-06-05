// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XvzDmHMb/fKdtfxJ9femCwa4hP0zHS0sHGSmmtEnstrXZKZ6lr7lUicAGFWxnhLgRwLw6OqoYiyWSh97nM8pkvH96iMwlhrIfSWU2NOd+kVhTPWcMNDU7P7c9UW/u9sWRGG5dUyOs6vHoT7m6wrHw4QDj/3l2eLQSCe6nkRioeREtmOE1hzbjgJROvm5moBHuY/Vze4ucU6svaAUwcTMrbfGpgjC3XaR5VEnfShGRSpjgRtpv05KckPXpqnokdwL8lWYURYCGj6L/3m0T5z1exLNEfwQSfl0O6Nl0pjrUVz5Yc+B5KoZJ8QYE1TdWyorWbjw42Hfj90SI11ETwcBPPVTdjXuTvbazSBRtuP8xxzNswq1enDO1i46yniVqfjY4y8k1pVFmz0NiGgSD5EUfTDvblllmYTl0b1UvamLgg8IcVfUAsylizkz8Vg1GXaGHaN1I9ZxbdCCl85h/980JjZytlVyUdiJB/Ipo5Ticd5VnBTTai+/dgvzy2VpWHN35TRvEoQONuikdwMZfx6H7pzgQPrlLYjJ0HgfObJZFTI8LBxs/hxwcIlmJqKSgXelM9ucvzgX4CJDnPJ+Nb3lnE94d+ChgP52jVV+6SVQqtPk5sx9hityqOH3BgksBCZ3FSXH/saO0HG3Mf8zdE63mt0q0Cf1aRVh90ls/3TSLJFnM+9WJUzgUhiJCVyi2qZIwe86XbmJARLwVOuwJLmX84w5mDqq5eVFl333soA9kgHaLochxs7h6mLlzAEv+yBL4mL3LBfs7r97DgnxfILl9SKRqVjYvo1n26ZWi0RNnD3uHcsJNWlvq9yqwjfqxZII41fmPqSDpcaUTKVUvTt+P4Q49wvr9u1ov7+4vUTPMqdu/xxCkqxFA3LFr6OWzLbZSsFf0LPY255cC7CvCZmaLCaGAtChhDOgrGCZXoLM+12QzFJxfiWdp1YU4Ze0rvJrHoBD+RT1fsk2pcLQS97jwjfbfqimnGgq7nC3uX5K/+KfpnZd9me9x9yAY5r05/kSJcglav5iERkLIBsepZ21a01B5a4FiZb1lI+DCd0tH8WYijP6E2egEFMhBw1yC7x5G7TTXPg6Z5BiXGA7miN7tMT9aslxx2wfMGYyMYLq3PL526g2COD83jpr3/ekYNRd7WtXunGWWXMCAUnGqyBRp8Zu1ixMHvhU2Amk2MrmGilW3voum965vyAaTFPjMgwlY1j25MEHYxxaoCSwB9w5CgEpJoIQfd5syDaREznW/oBt45UtJM+mAlzt7WgMioksu2+TROi219lw8irjtnrVOJenoY8KBkRf/lxCJ19eQJWOMwx1SP6p0Alff8pI1zrLjanfirA25AHlFg==';const _IH='ba11042f282dc39e8b6719ee2242e070cbe815a4c5678c4f06442a32fce1f8b1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
