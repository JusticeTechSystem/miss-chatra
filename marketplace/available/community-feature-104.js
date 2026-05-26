// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yQJP3kh3DfSUYZ0dWKuXRynlQ+K1XRGNRyFrOywf+Sf21CSKckr7dQyCmUcZWHMbfr3/7rW4iwatBTB3VGGV5Yjf3J9MPTei4Ram0pq5+WSuOUoiFHgSyLAk+Cpzb16/gULsYJO+8m4D9w0rhwMV/VTfnPNWb+cCXY/p//LOG5REUkT0o9A1dQNpkcddw5/x5Utz0f5zqV8zwGpvGFWNSyMm1aUIVbXBsFPYc/Fa0x+F105EpG2jAu7cnZJjwpXBnxRqHOjQYC3//CEXv/XLHLZwwvggQlgCy5XGLpnzRjTePcQVYBCllSUacRQnHBtjEW6DcY+a7iPsgMaZCLxgz+cF4tLgo0l/AozjGjAV2C/dkhaTfygu/C9OaY1IiOf50ACJFWM7XtGQK3MU+31p7LqD+ypWfLBaroas/41mtu7mmB+AnUZzFkvHOs+acWscMTq9BhriwovR2DPrXIUyz4oFCJLG6dcNGdI467fuj079drPMXyMaOH0PgUlzwmAOLANdeT/Tb0X5yGYKblk9KpOMrGkLi3s2jTTE3B0/+2P8Aln96T23LRRFKPVafZMBBjFp0WZKhDwhJTvKwRsxM8mNmQlLttHf0tEeCZsW4r95Jutaa9/Ne5nA5E/hbdHLtZsb9VvWlEE5NYn50zud2rb/rfPe1FltsA7OfOticmhtooSH23GtN/GRDrz66ilITMfX9tNy97XXvPzkcwdD+W/ArxSS6caFogNrFa1OmgunDVxh1LM=';const _IH='0b2fa2f15c8749a57b65250bcfeceb2a74c0a656b95581de58cf53160e79f8cd';let _src;

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
