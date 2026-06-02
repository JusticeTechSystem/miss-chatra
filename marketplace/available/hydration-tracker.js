// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j+j5Up+98svCxaqYXLrghqa3qniuISKS2Ikj348UXLIYuSnKITBvJ7ihANTR9TwbOYzNBjcfuib+NrjBVzYjGvWNMB6YrAYPUcMYArR3LxxRbP8A9gd43fMb4aBtMYdLoszBf2mhYbamcQDtzOwy2FWk1oCU6ME8EBI0QLkwsjEToTWcNvxWDlTVzQfGf4zLWL8sULbhOVtlDON/lmFiQnBBW+GYhzWZNAD609VdEc6niKKkZVElQBz4er1Kh0/juUS34FqAOb+pFCKuTbPQBnxcaoMjF6hW4hyelOCV12MKwG5Tq8pAEGHa6iegtOSd6eKKe2jKd+DeUsyN1X+WMZcolFxAMkd+4iS+YUKJBqyKo66DLrq23OnXW64pXr7Cn4+Brbuu7QV+wEQPvYpGrEK3UaAglvnh+J6d5icIZq4xZPN7bQXVpryd9ume+1g7LxYnSJ5QDqNXgXAmwcLk6moD3SF755EH2GVKQ6UD0g4URVSB1Er4ASjgKmDOTYnCgdukx9RMTsUQT1aTftIWjCOW8EI8bNNdTuiUKaRZg3XhrwHREVuzYn4BYu8qQGuvOU41oHS1qiXN4XFEs8bxWx6/LdQpc48fKBsQcPR878y1ULUwGCWsFImUt9Mr2gHNY1Vm76yvmqgnfb5p0YhQM37iRbLahoLGwwECABN6GjqvEpgPNS1U2q6VB2e994lwYJ8EdtNOU+/9e7lCiLqBNRV+mqOX7PsEP8bgY37e6RRBCgolmX/tSHygn3eOMlMMvs6G3gKUNjaMdHY4ee4cE+ir5Rz/IIaTJjHBk4xpv4Z7amMMD5sTpsUrxiEpVqZBNo2TrtLFvRiZUkMHsFowgGp3zUO7GJcci/bI4Cu26R5TG5gwgH/FXoHj5lBbMPcAhQcgtnd/nkE92wnA+bAO2lLVAn4Izogr/jK5f7j3zUwtzC1x8o6QiZ6GUsY6H+dcafqZEWxyK/SgvlsN1ORmvAqqi/WhrRRsx91i7/rwxIXdUwLj9ePJ4HDDU6gXCv5pAYjSzcCwifvuf0ACVTEXlmSVZI8/qmeAsg+jwnfutYCk8ii8rB1km4JA+egObfVFeml8XePhOtEVV0tnrweOT+a+84wOhRjVHAPEs5KDAltykCoyv6xIG0rapCO6wjlRTLiu8Nig5VAq1ZNcfiQXzsJ1T16R83KDQms2A3U0z7bw6ApcgkhcGJnfVQfKVLqvIC5ePjeJM9VYCARG9PhNjAC7dM3fQmPcx6ltFk7qtJSPP5aQ8Y+UmbIxLP+rtl9ZB2YOW+41HnGceJ/hYLjN2GJdmdvyMRLnTolPisAzSMKmb4P6yvsga7iM6k6ADrP7J7EKq4HuxL/N2VoAtX8/h9BH3OubkXw7Z+qvIpoZsl0ItAZLgPJcheFzAq1CtHxnGHxZPlAp7PzDYDn1cOu4fMLCRz19RlCcslwVwwk5gRW6eHe1NZxqcDAcMvMx+XtHNPDiMta8Qhf9RqAv7gz93yiJNwctHwW0OeKZmwUfLSO5e32Q3kbgSp1W1+h9tFGNcTntzUGZ9zjzzai9y7H5ND8xVYxBfWxf1liihI3KIU07Nz7rZS+VAFJnWDYpBJW4/xrLtQxj+8NPRC2QhNTqRX4+veXeH7h9+I5AZz0jroY4mcsq787J3fow+Z1BH/H8kf3OK/84QvQmEWKAlDIyGVFmb7mosUUXzt8T7to/j7BH0FE=';const _IH='9b4ad26bda187166e6843fa5f40e77d04a813828777d3204c3bed80281dcbd02';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
