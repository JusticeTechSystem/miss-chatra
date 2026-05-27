// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g3Bi/8qkf2rguiTMf90iFJ9FZbjvGkaFtBa3TZE2h70OF/iqnzx8UTwq6JE6qlX8Bv491fUcW9M3dMzaTGwy5ni4jfGyV/h/dEuFJ1CKdx9gPESWWEhsdfdLN8SI0rlMOTbfI7CyYCfBJml8P1xAr4+NIBNalueht9vj2ofjR5pF+dj5Bjmc8C01itBYS4iGizIIo8QB2QPn85bn/YuETw9B7xc1au8hy3FiWYA4pGYq38UoydXctPlJOX0CByfs0e/DtOrv6VDLOjT+jf8IRJP9lj691OxqgzzuOpkva3PH9sgWj/dv/E+xqWnBnW94/L7P6SOEvlsKqUYHPTEHK/m/ZdBBcvUBM5Rw9FnZ39uvJgZI0AlNbuNuYS8pN//DGV6aTwty3t5DNIQriWtcmXqZBnt94dhlEAJGGCFXuq9BIyu7pQ0XXmsfkMKR9V3QuSw+cGfI9wOjGzE72ChyYQNQVb8quP/6O4rSot6H+dsuGj0pz+ZK6RSvgGaVpI11ie+8lrp4VVWdnHWZo8siFpi1LuIvxuw0OjS1ns+ic8W0Ot6mBoU6xvtlg34z1pyIM8I4nuqTfNcIS4SSs+j4DST1ZLCtrnnYNvkwCaJBnQxG45R2zyVOKtOsS4hD8eciVYl7nWuUziU4cogqgIR/y14Ug0xc89Yx+K0YubM2dS8mmcr8KGbdUJ2NpVNNALsR+tnUOEHggzP/CGy7lgS8FqMQbYW9S+gH7M4B33N6qmix+us5QJ4DJdYo3dUc+LwwuXCW3SBMzRYp21qSno1xr2quTjUeA0D5YSt/P2VoVFUMbqrpl5o9Mri87TDVDXV2bL8/BM4A/+SKvlSK6j2+jaOvu23uUpUihsvD0Vq1i+GprDDkvZcVPOcJzOeim0XMOH+mfhAgJcojyIXjHev3iBw2Ix3vCshPRN8j7l/l7oPv2Ptg9IPH6kOieOxV5M0OVBpYI0XQsIIHV5Yr/PCDT42KAAbLrUFB1gw4oyBoQx1lGcYRzpBADTyLIlScJpnocZZFSS28I/9IGpAH/ZoCy2NB547zPYvih5FYhbZRIkP0zqncVy5KwQKBobWMCzsojXwHsSE4Z23ZJtRT+M01V9SyRkeM0auJRyUuQ08+I04s8uh7yP36YJ6ioNCTWiv7n7bEpOxdq0t4yZ0A901bJRPLJx7SMDDENtZdwBGODqFgHmfs5bEk8D2hwzwBXDoKISTqLkHT/XRa4mof6+o7/X2RcsbyCdxCNdX+HHNSTPQHp3Ib9STUbNupNXbwZ6MBHxJJTs0jqR38cn0g80WmNfjQkgEa2rzYsw4Ry97ci60FKHIQdI8hrnyzbvu81kIt3h9YYyeELw/xUrZ5Vk6rJNDlT1vBVPZbz5sWYTOk';const _IH='11f7e8e3b14e6dedff6503d76b1ba88f360b5937ebc2a2d4e0a6fdee65867aeb';let _src;

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
