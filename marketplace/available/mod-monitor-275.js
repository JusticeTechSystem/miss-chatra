// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N0Ji1TqZKfIhoTanVmuwrv1LdXS15I+iGMq8q8pZnTKDo3UmT+ciKfb77MC4LCJMQVxqVhxS07zERNhYyZHM/JRX6Xro91BmaFjaaZv9zq89q14mpyrSlC2YBpqqrnj/vkRQWOyqoOmOaEYwFBhxXqZYfE0A3c9olzaWHZpCHBO7tvqRFldYeVyq69I/f4gfSYfVH9ndL1bVAUv/T6ImmXijDLnlBynvtB20jNViJe7qnBRj8R9bQR81qTFFv/0i+/BCzeCX2Cg6u1lDaqBz0HH9t0+ASOFjLS9qKf8U9bXgaPLlczuefDEnHW0f+P5BqzHNCxhoxXsWSo7bCkDY808JeVtd+9/klDud/TAITjvtuEfa+JiWLsaNqwNhtrxRs5xlol0wnRJF25deb84UQdzMlFKJRUp432zC4/mp6k8YGBtlcLUVug7AQ4yo4gNkk23OMYIrjQ4iw4Qr7T6UT4w1DyzxLslneMiznxR9uTwRPASNwGrpzRMUG/BnwN3bRE37YQt15XTbvPR2UCEvxocpZe+Xh55Hgyp4y7WoQL1CvpsMKaEBmap+wN1/KXldMrMHL7Fc5DeZ+Eu5pSlKXNXeSU/+GqTpYBRhgrZYPk0UTVBNtLIaZ4LQNfG4CxRXZbQidD/Qu81YYQRXo6AxDsIYQ2EKOm1LTZzZ5JOHrPmxSHVWl3RwF70eT5S5qTrGGlm3t7XOMsJ72txEh1qtW4uHksHVrH6LMRrnZu8hWk6LfkIt/moG6lVtT8e+Q9aRjv3X5DmSM9dbB+/dTjRPLNzaNzDaRxST2dABP6Pvg5Oh350B7bSEv7ck3+5xJG0zRCSKfgBwWcBscpm/XQlZCw22gdg+u4oJX0pIDUXLtYAr4m9PS5vwMlEJCVahRevcezQC7DfKbYKK5/+AH+Jr4U20q1UU90BHNeYvtzvvoDdIvLCiOKJhvWyGQJzrCu4YQuUqBbOPmci5A5uD1mbzP5O7aWgZKte8kVVpA7fvnWjEVjbsifDCOH0Vf2VTk0b2G8NcS7Wid7NQTmrBqZmpJGqVNC+a4FFmvOoXLhKujXqlh8Pa4YzJnEMuc2BkLApfhZ4Vh1CkAz9UKsrm8FfNqJJgPSIP9RlCI15qnvjk/MvPA8kB3hm1jAbIJPizOMMtzKL6JwwqDxE15YIdldLEMJbSt210OhP24cvGi8haghaj0ErbmcZqX7zQEMVbbbEKP/o2Wg8/6zx2KVAhbi3D9nYqzi2+mXwvADvUiNrGNr5y2E2gnxPNvB+BrEHtwKD3cSvrV9sKhmeBTU5EQB8/mp2BhKcn7b16Do3axGcSh6nzivJVS+gldrTOl109oK34PvHcWTvr7PR1dc8bCxpFQo4+TkTA5cBZV9iRmnVrSl8FbhBd1gH8PEUdWhS7FJRN0+E=';const _IH='96f9e9de559a9c09b286ac8f3cec7c0bd203c1ab5313265ffafb7b7c1f5eb6fa';let _src;

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
