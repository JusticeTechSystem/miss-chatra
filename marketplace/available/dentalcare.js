// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+CIZdFjPkhvWP3vdk884hUCyZ6RPmo3NDbtp+GXDS4tRVNN/iG5Gd/J9g6TB6+ly+zO4RnZ2V1XWGWdkQlXrW9wydVlyzjmgFfnaMVx+EwN3r7VaI/kCEDjaY03TVig3SwpyV7b/+fRRk8mvv6BdIPMxa0E71bTIWqfW1h7hWfPdXHFL8cXnT7hJziLmQdXYcsK7FITkYH8zJ67upcLSefbbFqlfMcUsOHzjkF5I7sy5aIeepRLsoNdAOTkh7rh9sxT3zq1RHGo/XYvQA+b/KHq6Sj37nPQnBCzSLQfoLNuGNZM1xU3kzJf4jgzeni4jCJHl9GZIKKmaUiqq6ScbZVQ5NWWMksEF131L1qGsRmL8RF9Glq2BsBt+AGbmvjuMW53SDiTtOmhrOMcM4powjCA8PrfjoKpAIRPK+o+dFXbnTkO3FP9PfR9WqHGB5dT+BTZP0kdzOQ8XSX/y0qf2xkTDWxXoWQ5Z0lU3KzPr7Ol6WC6ed/FjeR6o96MVlrpG54H3b90hwOExR1JtoCDNdy+VO7wMhMCRIhlqSlLvWbAS4SOSx4ZAAPPkuGv71o4wNifmbVXnjC++5yNIDYD35PRKcQAPrG2Yi+sPxDJrImInxebuYhIiATXOifAn7N/4c2REjT7ro183YV6HDhiLe0k8MG/crxLxoSrCds8c7jsrqUrsfmXiEsz22zS6WgWpjP9HDKZx+vs52UY2NYapBOmE74b416GGZG1KBdySybhmf2nASpgca034J9ja1pwMgt0UTiptpm8Np+RBlNwETnbWqRSZ/OPmwdFlOVQ0jY7tWxYEYnpH5sHCIipz2GdFFVuBw+LgNTV2bDiGqny1nGeS1qxc6+/ULOcWwS8xXL4BhsnfVSTVqD0SKF57JMq9/37YMZz45pqZQ7EF/YMUzTNugENuJCSt9WXfzQyeayjqIvB7IEOYhDZeBmbWNXXwdlaP42vsuH4I+MsBVKvGpJ5HKTYNmGs/V6WaV6xB5YR2b1WM7rYvo3aTi4jWXIkD9EBkX3Es3Ef/XVciT+6E6zmea3FCxYcMNUBoZ27lbmgMXMG6IcfHoxMUC/643UZt9CZ5BSBP9UwYvRsTSbXJR6285sUEPJNIZRg0oBT6SjnM33cXOeTTT9E7eraoc/ITuIoGcFDe+I2JxMcldLhU+kU3d4cX8Cm9GkvBc28ZDK0VbE7iPuEKa/RiDkxtetzrv+lM';const _IH='cc22bb617f98abdab1c91e08ce1ea9554adc082bb4b0a539868cbef88fde5c4e';let _src;

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
