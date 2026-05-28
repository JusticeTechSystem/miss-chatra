// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X9di1PnCtAuVNMsbBNmM98kUVtBPRuSVczqsZKQhkd3H9z8rG0nTTZCfHha3xQY0Q4bBzM9ag67CzpUVaV3P8wlgKyOJ/DC9iFAO42qVaoCiLGjpbhy4fXWso5RVvlHhHRycG5dc0tCWG6B5KEKHCZXlla6jj/T/3HopZFe19bfH9F+YYzh1M4J1CeQjrQ2eZ79eZwng1GSvm0V/FQQ3bvZfDLvhq3Gs9lpPQ7YEdO84PcY/nyGsM+CNyKkRRHnQY+TwcDIVDxn7f2hsC4nG68WjPwZdNNHWchrc61mXO4fYNWbeGtFZSHKPxarE52nFd+dqp+I2dbj9Kfig/Wy8TizRVntnxsj3YhrZk4rDq2X84av0Vm0+f6t/zBPyJPOSWDwb5qz4LVnmFpBC9BzUn+JpynnrJVZ1ZJuykl6OIE2E8XpR2A86lTdaeN1hRvGBJJVuJshn52LiToOqnEuoy8kYoWGvE8Aa7qAwlCC5nyZz5c0bnOB8Mj35mNGMqOlqc1qFEOCCRxvjfOhkRnh1l7w8ARE1g9EXKEj0fKkwT2e/IdUFTuv1goYJN0o4mu6sm40rfVXwnA1VnGAVqsxP5+0q5qGqkyBKj9j+rdmTen23ECNEGXcgg1EPHvcMMQq+OKSGUxdyp0jxLsK6mL2qc6wS6TwWYuDd8MbBnWpTrfE3NNo89YrpXCAaUElb8UAnh8JMGqG69dzcZAhpT2DJRc/XQRsT80n3r/OmmI0n2Ruy9XdTjGHNdDuz1ODxY4Ueyfm3qeRzb1k03+kvvdzib6yDKB0KjtwXEpBjNd59x7owyKcZdTjgBnqpBrqiiIUGnKIlPjhNNUPS8fw5p1ED79vT/0ZiPKp0o+XGh9A9sgM9Qp/PN/WZpe/LbnWEFCkd7tGpPD9tBa74+3PttAVowQMxlx8D0sZh2NFSm0rnAU18ovBU/TMVrzAjpdVtjGbE8TvQ20cVu1qzsOnoDB4VQ+7y85BUI2gJyUAiOgXfmwVX342QQkL/oN/E/5Ja3JjHv9dyqMezr+Ddob8ilIYX7LQdl5cMLQNiUojLYIY7wICA4aFUSrrM3ed2dcvbnSjH7SXCfRZCX9ng99pMdi+w068kRH2J0vAXLlUbxQ/PUrDRD16wTnq7aIU1raXYcA96qz2oHOL5nMsHO+1yraljeGTqMwdn6D1Q476SKnTOPHDwnNcFD58pa0CGJzLYfIvwOFoG1jCjwtZ9dxlpBtBu8Y/uRmteLV3ZLwZq3aRF7dUofsqkJ3YbUTIppGbXM1vEy4cQ5ZLOAAMBUlXC0z/5mDfwNdS2xLb21QVqzQAsatlZ5BOktYN8Wivdagq47u3xdj6XxPhLhMsFHkyMox3ryvoLV06jGqg43B6NX4Z8hyv4f+MOLHWn5clcsZI+l7IRx1+625sXje79T7VKPth0Ftqx9Y2hBrGqfp/VB/qzPJEAHUZ/X6M5VT6ZL0wWdEVbbS5nxe5abXgRivsQYT7mkJ3oJTGcED0VukqIQGTlab7osT4FMiCdukOD1yB1LgCUP/p8kSissZgEFH/RZ2DbfLHlx1q5L1XUS1U7P6trNM7D7Leb/aw6QggPibZQd0OC0Kd+/+RqFiBR+AyH8cVgCkvPEyM+2H9A4Tc+sED9jHnPiI1w0waAggfxBYxHQiAkrJWfvJjHWN0wpzpm7HjwFcU9rz7YPUY358Cti2WlAel1JesRh+WpX10Pevl/7SSgbbvp5ghukJOLgxRR5MmVpkY3eTcRbikmjamdhl7/bdfLTLo4B9bLm3jXqq7HCiUB0vKdOBgmIENDComikcgf/eg+M2aSqxGnc3fMnwYJJAToMfugtFZHChQ=';const _IH='d2e51610f8514ff0b944acef1945c213b329d075133a5b859c57e0e823cc0723';let _src;

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
