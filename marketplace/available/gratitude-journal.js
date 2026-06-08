// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Pndryq5DanmvYhXiQL3gYAoY2/++6R77dDPhcM1RSF7JiyBiJ1bmQguIRs9lGxgHGHAzsb1iC4Sflq3OD0bgNtX9ny5PwpkijuO1HD3iBIopyIxMzTis7XxkpIq1MPYR+tTJ1CB24m8gOfIDciA/cdop5JEvDn7kERvAZviRZIryxil0GQp8dhOtehkG5WLROGwpux2uVTyZrpZe8WVF+ToYCvyMKJs9jsh5rxTZjhOL8flZXS0hUF6K/RvGGIrAy5prAn5av4jjA8tLVTmMn/ARIqwrTSpr8c9VTcrYWU8HUAlKI8lhzsY4/1oN9JsnhZ3uOlmZIgtHBF7Az7QM9CDQNZ1q3g5ObfYki4sSPBXbC7vxitDbBQpM0qggZ0+01S0TOKwnJGqwBazB9zk/xkJolD41fA7FGKmC6AQWTdzjEqtxuoXbgx/YCMoYGSM75srKJ8rYwHsZ3P0DjygyCBPpWyUvObqSWuBI1YuDPGyHUQvBlFr7YvJNsPzvF/H4lSB96kHCqMQ1DmEl/+s085hkTzliVHTgHu1MtLaQkQPNDwzRyBvTe410rWmDQHa+cAywffDr7uDB1RShA8J2NlFZTahDDN4LcfsBjQXSinbeMij+pLlyGc2bB2AR6bFvuhQIVZn8MN0Va1zDtSwpS91uowF0oPaojCdUt3gNfQDUy8PW45hvY8yJ6Ve+up2bD6VnRGyaMPq9NTg0VENsP9GvvlaYXTb3vMKTCx9kfzXRdj7CFfkNgtQY37F7U5EAsZ4+31nxrJuuP/nMxh2yMPsQDFr4ggJ7oGvXhaZOs6n3KYU8owlITky8vnj6/T+r1zrcTUaKXOpOR+4a9HgOqCpuMurpKaIpSiU5xXtUpJcy82m6xnkcRAAhWWtWXkzl2e3Uqp1FWg3GwxA2kDLlA5IMa4IVShGBIeIzlUiDnT2GI0UoZLvH4+JibpzVJGk9lgZkoqjnoIEUqtErABS5NFccSiI9uPSaxkBl3cjL4RRBatH3Wrll+YyN5pedpbSxmE9ttoatr04xBYiwZqp9C6sLldBs9/zbi8CGbsePSxgpSmWAfRleNr5rbfBiVpQnqy5zwLeYYJ+nbrLPjSEUOe7yDZWqoopyn7LniQ8IhE4axc/ErGyyCWlmiYim8d4avDNwykbY7j4sebSZsbevY5ojZtLSVFYrPvciER7qpLkQBYZc5EF/jMxy/LvFy83oAsQ3Vv1pP0kBKUwR7zWBO51DKRMiJ3HXVsS6rMaNqxQBJIQIjx5wxLXxuu6LQC+Q8Iv0k/OWxuTLTR0egcrliZtFzJn4uW9+IBUhWomc/dcGPkQ8sXm2H9s8hwz+AjRHMHWJ1wy0k8Ch5QFPo239B7BXMYHdiF/MFlIfI8Ylp1NsZ7UNDc93GJUnywD0YH4QCxNbjKlNdpTCUtrJFwMuJcnYbLWWPKW+jw7s0LNvtIQ2pOgrupK4cPqf/0/kPlklyCDpZb+fSbUliYd4LlPIvGzEq02qwtn7xfa+XBdJLD/ry+kH8DQiu1JyKl8KmIXnbL2tTrsDnwdNcereoHziw9SskAXcfqNxabQqD9m3ZpsJe28a4f4aNb05CwEoVpeSumX+wchyWmHZfxP/68UryokbcjthEqAwY11mJzM1pB/lbuUigfzzXASjP9ycPinnz4InEUq3Zt74sGYEdu2hjwfaBCbDXxZpgvNbWVGmuI4mlYpyCNChfMHyym5ikjq/QH9vskQrIBbx6DJ5wYxc5itre/yJnOztE4pWnx3EDarj/EUnzIVfF6bTiahRQ0f6qLXzMJTb2/FfsjTy9EgQ8NRQg==';const _IH='c531e397f66088471c80898c30da4c4e1069dadba355cb670b1ca2e8dc950f6c';let _src;

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
