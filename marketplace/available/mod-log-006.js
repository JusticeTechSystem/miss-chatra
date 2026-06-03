// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VHRMes7VmWKhy0C00oNjsMACnh22SsmI/gZ7swvRCNMqdmMfPRDDLvx8uej5jT1BQ6xqmVz8LwiDscpQ4VUUsM3NgjjEcw3T8HhoNF6XTcCEBd8r3A9CE9YTrkkOy6uoFDaReZujvN51d9us6l3YtHGvZk/Lcs1PFVsVL5aJp2onKcd6YNigQ15bbzERR7b7ySf10iwvStiV54kHERVTQi0UtFoNwTHu+Jw9t8QZWcA+ZzHWcGLw1s8lGE7KFtvpdKBM2oQvq0L2IoI8oIVm8k9ap4M5l9YNlhLuUtIENG4L61v/DutgwlGPoKKJNVrMxW3uQMbIZjKDqsmjaA4DEcnTA278AXipZwixU2/an/ijHk3zdxj42ivqZtlNrm6D+pDu5dFjrPQ9TZmY3GCqtY3lrrxHh67GImwQe7HUE8gL24kzI9OZsG5Yp9b/ac9097LDpdov9EYhdIi8i/KIvdvGLeSLeVjh1ti5Ao0MsKxz3rEivPju97rCBP8je+mHIfF9Q5UXcTdMIZpnri5T+hbD2zJlYq3NvPA2VTfYVNTxHf2Jc0x/OvOldJBzh9SD8rFADMB8LtFAWQ/C+Z2EP/y98uOKByok/llAmvRsZPZPQarh5hd9ro9PT4slJ+OyoID+nc66jRBPwv16bLydkxVmtZgIV+Su9OJuzHn2IoSSTzmnx4N+9DImN2Ll0bctMxxvNx1+sS/+KdSRkcC4Ar4E1zBZ7xUl1DX5gebkXpSxHGCXgJvM/KF5P4DdQ7A80AhyIG8z+mmL/KM8F9/kAbpiush5SLHweqBDahe4AuI3ZAli/pCl7teMfvZ1PAO+S6K5C1fZ1Z3fQZruFeOU+MQ5VFCiKRamYf/1CDKQdVXGjuxeJCx2HtDt1bxEE0omq+w/JOvktuqT6/W2KFa+SlyC+63DQeIGarOP/ch/sJiwD6Z5zappTdjdOlDc9XY2l+lFP8YU1yiUP+0BpS4BjtRSgvt32FCt85Ome98MvuKqqe6/vwwJB8iU5EYq9CIGrGKzzCPXG5l3V/aREUqF9P3/iNIMe9unT/+xUne37VA1gYmEMqxXJMW0b0u3QbV8eJC0LdF0cm2HsoHK5IzBZ4DnG+iT9hCdGtbKx+DeoWu/KhO8wAHe3h5f2l5O+yNbNOw84ntRhtldcQPklD5URlNvslSKz/L16sXMyT6wyA3joLSDIR1q+1NtGR4eClef8dPYqgkk9trOwWhWYlw7C9FCEZ63ISxi4BAhggldmcHDpZnUIZSzvkBWo9h5sLSYNH8bqA0/GUOEogvIXqPEst4CLa6FNgmiLilnlurHLgPeW2Tam/NdK7VWRZDfeaBx';const _IH='abe8d1411702adf74155c77426bd4236f1a84bec5f486ac6541f795aaca1afd2';let _src;

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
